using Arvion.Application.Interfaces;
using Arvion.Infrastructure.Persistence;
using Arvion.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Arvion.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        var provider = configuration.GetValue<string>("Database:Provider") ?? "Sqlite";
        var connectionString = configuration.GetConnectionString("DefaultConnection")
            ?? "Data Source=arvion-marketing.db";

        if (!provider.Equals("SqlServer", StringComparison.OrdinalIgnoreCase))
            EnsureSqliteDirectory(connectionString);

        services.AddDbContext<AppDbContext>(options =>
        {
            if (provider.Equals("SqlServer", StringComparison.OrdinalIgnoreCase))
                options.UseSqlServer(connectionString);
            else
                options.UseSqlite(connectionString);
        });

        services.Configure<EmailOptions>(configuration.GetSection(EmailOptions.SectionName));
        services.Configure<CaptchaOptions>(configuration.GetSection(CaptchaOptions.SectionName));

        services.AddHttpClient("Captcha");

        services.AddScoped<ILeadService, LeadService>();
        services.AddScoped<ITestimonialService, TestimonialService>();
        services.AddScoped<IEmailService, SmtpEmailService>();
        services.AddScoped<ICaptchaService, CaptchaService>();

        return services;
    }

    /// <summary>
    /// Azure App Service: Data Source=D:\home\data\....db needs the folder created first.
    /// </summary>
    private static void EnsureSqliteDirectory(string connectionString)
    {
        const string prefix = "Data Source=";
        var start = connectionString.IndexOf(prefix, StringComparison.OrdinalIgnoreCase);
        if (start < 0) return;

        var pathPart = connectionString[(start + prefix.Length)..];
        var end = pathPart.IndexOf(';');
        if (end >= 0) pathPart = pathPart[..end];
        pathPart = pathPart.Trim().Trim('"');

        if (string.IsNullOrWhiteSpace(pathPart) || pathPart is ":memory:") return;

        var dir = Path.GetDirectoryName(pathPart);
        if (!string.IsNullOrWhiteSpace(dir))
            Directory.CreateDirectory(dir);
    }
}
