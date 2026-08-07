namespace Arvion.Application.DTOs.Leads;

public class CreateDemoRequestDto
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string CountryCode { get; set; } = "+91";
    public string InstituteName { get; set; } = string.Empty;
    public string ProductInterest { get; set; } = "digital-school";
    public string? Message { get; set; }
    public string? SourcePage { get; set; }
    /// <summary>Cloudflare Turnstile / hCaptcha token. Validated when Captcha:Enabled is true.</summary>
    public string? CaptchaToken { get; set; }
}

public class CreateContactMessageDto
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string? SourcePage { get; set; }
    public string? CaptchaToken { get; set; }
}

public class DemoRequestDto
{
    public Guid Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string CountryCode { get; set; } = string.Empty;
    public string InstituteName { get; set; } = string.Empty;
    public string ProductInterest { get; set; } = string.Empty;
    public string? Message { get; set; }
    public string? SourcePage { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
