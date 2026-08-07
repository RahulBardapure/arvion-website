using Arvion.Application.DTOs.Leads;
using Arvion.Application.Interfaces;
using Arvion.Domain.Entities;
using Arvion.Domain.Enums;
using Arvion.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Arvion.Infrastructure.Services;

public class LeadService : ILeadService
{
    private readonly AppDbContext _db;
    private readonly IEmailService _email;
    private readonly ICaptchaService _captcha;

    public LeadService(AppDbContext db, IEmailService email, ICaptchaService captcha)
    {
        _db = db;
        _email = email;
        _captcha = captcha;
    }

    public async Task<DemoRequestDto> CreateDemoRequestAsync(CreateDemoRequestDto dto, CancellationToken ct = default)
    {
        if (!await _captcha.VerifyAsync(dto.CaptchaToken, ct))
            throw new InvalidOperationException("Captcha verification failed. Please try again.");

        var entity = new DemoRequest
        {
            FullName = dto.FullName.Trim(),
            Email = dto.Email.Trim().ToLowerInvariant(),
            Phone = dto.Phone.Trim(),
            CountryCode = string.IsNullOrWhiteSpace(dto.CountryCode) ? "+91" : dto.CountryCode.Trim(),
            InstituteName = dto.InstituteName.Trim(),
            ProductInterest = string.IsNullOrWhiteSpace(dto.ProductInterest) ? "digital-school" : dto.ProductInterest.Trim(),
            Message = dto.Message?.Trim(),
            SourcePage = dto.SourcePage?.Trim(),
            Status = DemoRequestStatus.New
        };

        _db.DemoRequests.Add(entity);
        await _db.SaveChangesAsync(ct);

        var html = $"""
            <h2>New demo request</h2>
            <p><strong>Name:</strong> {entity.FullName}</p>
            <p><strong>Email:</strong> {entity.Email}</p>
            <p><strong>Phone:</strong> {entity.CountryCode} {entity.Phone}</p>
            <p><strong>Institute:</strong> {entity.InstituteName}</p>
            <p><strong>Product:</strong> {entity.ProductInterest}</p>
            <p><strong>Source:</strong> {entity.SourcePage}</p>
            <p><strong>Message:</strong> {entity.Message}</p>
            """;

        try
        {
            await _email.SendSalesNotificationAsync($"Demo request — {entity.InstituteName}", html, ct);
        }
        catch
        {
            // Lead is saved; email failure should not roll back the request.
        }

        // TODO Phase 2: WhatsApp notify sales on new lead

        return Map(entity);
    }

    public async Task CreateContactMessageAsync(CreateContactMessageDto dto, CancellationToken ct = default)
    {
        if (!await _captcha.VerifyAsync(dto.CaptchaToken, ct))
            throw new InvalidOperationException("Captcha verification failed. Please try again.");

        var entity = new ContactMessage
        {
            FullName = dto.FullName.Trim(),
            Email = dto.Email.Trim().ToLowerInvariant(),
            Phone = dto.Phone?.Trim() ?? string.Empty,
            Subject = dto.Subject.Trim(),
            Message = dto.Message.Trim(),
            SourcePage = dto.SourcePage?.Trim()
        };

        _db.ContactMessages.Add(entity);
        await _db.SaveChangesAsync(ct);

        try
        {
            await _email.SendSalesNotificationAsync(
                $"Contact — {entity.Subject}",
                $"<p><strong>{entity.FullName}</strong> ({entity.Email})<br/>{entity.Message}</p>",
                ct);
        }
        catch
        {
            // Saved; email is best-effort.
        }
    }

    public async Task<IReadOnlyList<DemoRequestDto>> ListDemoRequestsAsync(CancellationToken ct = default)
    {
        var items = await _db.DemoRequests
            .AsNoTracking()
            .OrderByDescending(x => x.CreatedAt)
            .Take(200)
            .ToListAsync(ct);

        return items.Select(Map).ToList();
    }

    public async Task<bool> DeleteDemoRequestAsync(Guid id, CancellationToken ct = default)
    {
        var entity = await _db.DemoRequests.FirstOrDefaultAsync(x => x.Id == id, ct);
        if (entity is null) return false;

        _db.DemoRequests.Remove(entity);
        await _db.SaveChangesAsync(ct);
        return true;
    }

    private static DemoRequestDto Map(DemoRequest e) => new()
    {
        Id = e.Id,
        FullName = e.FullName,
        Email = e.Email,
        Phone = e.Phone,
        CountryCode = e.CountryCode,
        InstituteName = e.InstituteName,
        ProductInterest = e.ProductInterest,
        Message = e.Message,
        SourcePage = e.SourcePage,
        Status = e.Status.ToString(),
        CreatedAt = e.CreatedAt
    };
}
