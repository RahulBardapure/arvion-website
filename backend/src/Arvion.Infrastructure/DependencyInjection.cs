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
}
