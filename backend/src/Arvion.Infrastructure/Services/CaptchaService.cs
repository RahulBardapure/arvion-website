using System.Net.Http.Json;
using System.Text.Json.Serialization;
using Arvion.Application.Interfaces;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Arvion.Infrastructure.Services;

public class CaptchaOptions
{
    public const string SectionName = "Captcha";
    public bool Enabled { get; set; }
    public string Provider { get; set; } = "Turnstile"; // Turnstile | hCaptcha
    public string SecretKey { get; set; } = string.Empty;
    public string SiteKey { get; set; } = string.Empty;
}

public class CaptchaService : ICaptchaService
{
    private readonly CaptchaOptions _options;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly ILogger<CaptchaService> _logger;

    public CaptchaService(
        IOptions<CaptchaOptions> options,
        IHttpClientFactory httpClientFactory,
        ILogger<CaptchaService> logger)
    {
        _options = options.Value;
        _httpClientFactory = httpClientFactory;
        _logger = logger;
    }

    public async Task<bool> VerifyAsync(string? token, CancellationToken ct = default)
    {
        // Placeholder: when disabled (local/dev), accept all submissions.
        if (!_options.Enabled)
        {
            _logger.LogDebug("Captcha disabled — skipping verification.");
            return true;
        }

        if (string.IsNullOrWhiteSpace(token))
            return false;

        if (string.IsNullOrWhiteSpace(_options.SecretKey))
        {
            _logger.LogWarning("Captcha enabled but SecretKey is missing.");
            return false;
        }

        var client = _httpClientFactory.CreateClient("Captcha");

        if (_options.Provider.Equals("hCaptcha", StringComparison.OrdinalIgnoreCase))
        {
            using var content = new FormUrlEncodedContent(new Dictionary<string, string>
            {
                ["secret"] = _options.SecretKey,
                ["response"] = token
            });
            var response = await client.PostAsync("https://hcaptcha.com/siteverify", content, ct);
            var result = await response.Content.ReadFromJsonAsync<CaptchaVerifyResponse>(cancellationToken: ct);
            return result?.Success == true;
        }

        // Cloudflare Turnstile
        using var turnstileContent = new FormUrlEncodedContent(new Dictionary<string, string>
        {
            ["secret"] = _options.SecretKey,
            ["response"] = token
        });
        var turnstileResponse = await client.PostAsync(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify", turnstileContent, ct);
        var turnstileResult = await turnstileResponse.Content.ReadFromJsonAsync<CaptchaVerifyResponse>(cancellationToken: ct);
        return turnstileResult?.Success == true;
    }

    private sealed class CaptchaVerifyResponse
    {
        [JsonPropertyName("success")]
        public bool Success { get; set; }
    }
}
