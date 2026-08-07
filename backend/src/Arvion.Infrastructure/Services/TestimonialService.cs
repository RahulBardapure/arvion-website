using Arvion.Application.DTOs.Testimonials;
using Arvion.Application.Interfaces;
using Arvion.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Arvion.Infrastructure.Services;

public class TestimonialService : ITestimonialService
{
    private readonly AppDbContext _db;

    public TestimonialService(AppDbContext db) => _db = db;

    public async Task<IReadOnlyList<TestimonialDto>> GetPublishedAsync(CancellationToken ct = default)
    {
        return await _db.Testimonials
            .AsNoTracking()
            .Where(t => t.IsPublished)
            .OrderBy(t => t.SortOrder)
            .Select(t => new TestimonialDto
            {
                Id = t.Id,
                Name = t.Name,
                Role = t.Role,
                Organization = t.Organization,
                Quote = t.Quote,
                Rating = t.Rating,
                AvatarUrl = t.AvatarUrl
            })
            .ToListAsync(ct);
    }
}
