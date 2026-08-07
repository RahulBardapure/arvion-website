using System.Net;
using System.Net.Mail;
using Arvion.Application.Interfaces;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Arvion.Infrastructure.Services;

public class EmailOptions
{
    public const string SectionName = "Email";
    public bool Enabled { get; set; }
    public string Provider { get; set; } = "Smtp"; // Smtp | SendGrid | AzureCommunication (wire later)
    public string FromAddress { get; set; } = "noreply@example.com";
    public string FromName { get; set; } = "Arvion";
    public string SalesInbox { get; set; } = "sales@example.com";
    public string Host { get; set; } = "localhost";
    public int Port { get; set; } = 25;
    public string? Username { get; set; }
    public string? Password { get; set; }
    public bool EnableSsl { get; set; } = true;
}

public class SmtpEmailService : IEmailService
{
    private readonly EmailOptions _options;
    private readonly ILogger<SmtpEmailService> _logger;

    public SmtpEmailService(IOptions<EmailOptions> options, ILogger<SmtpEmailService> logger)
    {
        _options = options.Value;
        _logger = logger;
    }

    public async Task SendSalesNotificationAsync(string subject, string htmlBody, CancellationToken ct = default)
    {
        if (!_options.Enabled)
        {
            _logger.LogInformation("Email disabled. Would send to {Inbox}: {Subject}", _options.SalesInbox, subject);
            return;
        }

        using var client = new SmtpClient(_options.Host, _options.Port)
        {
            EnableSsl = _options.EnableSsl,
            DeliveryMethod = SmtpDeliveryMethod.Network
        };

        if (!string.IsNullOrWhiteSpace(_options.Username))
            client.Credentials = new NetworkCredential(_options.Username, _options.Password);

        using var message = new MailMessage
        {
            From = new MailAddress(_options.FromAddress, _options.FromName),
            Subject = subject,
            Body = htmlBody,
            IsBodyHtml = true
        };
        message.To.Add(_options.SalesInbox);

        await client.SendMailAsync(message, ct);
        _logger.LogInformation("Sales notification sent: {Subject}", subject);
    }
}
