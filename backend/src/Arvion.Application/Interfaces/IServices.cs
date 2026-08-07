using Arvion.Application.DTOs.Leads;
using Arvion.Application.DTOs.Testimonials;

namespace Arvion.Application.Interfaces;

public interface ILeadService
{
    Task<DemoRequestDto> CreateDemoRequestAsync(CreateDemoRequestDto dto, CancellationToken ct = default);
    Task CreateContactMessageAsync(CreateContactMessageDto dto, CancellationToken ct = default);
    Task<IReadOnlyList<DemoRequestDto>> ListDemoRequestsAsync(CancellationToken ct = default);
}

public interface ITestimonialService
{
    Task<IReadOnlyList<TestimonialDto>> GetPublishedAsync(CancellationToken ct = default);
}

public interface IEmailService
{
    Task SendSalesNotificationAsync(string subject, string htmlBody, CancellationToken ct = default);
}

public interface ICaptchaService
{
    Task<bool> VerifyAsync(string? token, CancellationToken ct = default);
}
