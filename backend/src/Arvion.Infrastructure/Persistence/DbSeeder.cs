using Arvion.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Arvion.Infrastructure.Persistence;

public static class DbSeeder
{
    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<AppDbContext>>();

        await db.Database.MigrateAsync();

        var seed = new[]
        {
            new Testimonial
            {
                Name = "Anita Deshmukh",
                Role = "Principal",
                Organization = "Kunjir Public School and Junior College, Pune",
                Quote = "Fee collections and parent updates used to take our office half a day. With Digital School, reminders go out on WhatsApp and parents pay online — our counter stays free for genuine queries.",
                Rating = 5,
                SortOrder = 1,
                IsPublished = true,
                AvatarUrl = null
            },
            new Testimonial
            {
                Name = "Ravi Menon",
                Role = "Administrator",
                Organization = "Kunjir Public School and Junior College, Pune",
                Quote = "Admissions from Instagram leads land straight into our inquiry pipeline. Follow-ups are tracked, documents are checked, and enrollment is one clean confirmation — no spreadsheet chaos.",
                Rating = 5,
                SortOrder = 2,
                IsPublished = true
            },
            new Testimonial
            {
                Name = "Sunita Kapoor",
                Role = "Trustee",
                Organization = "KPS Institute of Management and Technology, Pune",
                Quote = "We run three campuses on one vendor console. Feature flags, role permissions, and Azure hosting gave our board the confidence to move off local servers.",
                Rating = 5,
                SortOrder = 3,
                IsPublished = true
            },
            new Testimonial
            {
                Name = "Imran Sheikh",
                Role = "Accounts Head",
                Organization = "City International School, Pune",
                Quote = "Student ledger vs payments is finally clear. Installments, RTE categories, and AutoPay mandates are visible to parents and auditable for us.",
                Rating = 5,
                SortOrder = 4,
                IsPublished = true
            },
            new Testimonial
            {
                Name = "Priya Nair",
                Role = "Parent",
                Organization = "Parent — Class 7",
                Quote = "I switch between my two children in the app, see attendance and homework, and pay fees with one tap. The school notices arrive before my child even mentions them.",
                Rating = 5,
                SortOrder = 5,
                IsPublished = true
            },
            new Testimonial
            {
                Name = "Deepak Rao",
                Role = "Principal",
                Organization = "Student MBA",
                Quote = "Certificates, leave approvals, and class diary used to live in WhatsApp groups. Now teachers and parents use one system — and we still get PDF leaving certificates when fees are clear.",
                Rating = 5,
                SortOrder = 6,
                IsPublished = true
            }
        };

        var existing = await db.Testimonials.IgnoreQueryFilters().ToListAsync();
        if (existing.Count == 0)
        {
            logger.LogInformation("Seeding placeholder testimonials…");
            db.Testimonials.AddRange(seed);
        }
        else
        {
            // Keep quotes/names; refresh school/org names (and sync seed fields) by SortOrder
            foreach (var item in seed)
            {
                var row = existing.FirstOrDefault(t => t.SortOrder == item.SortOrder && !t.IsDeleted);
                if (row is null)
                {
                    db.Testimonials.Add(item);
                    continue;
                }

                row.Name = item.Name;
                row.Role = item.Role;
                row.Organization = item.Organization;
                row.Quote = item.Quote;
                row.Rating = item.Rating;
                row.IsPublished = item.IsPublished;
                row.ModifiedAt = DateTime.UtcNow;
            }

            logger.LogInformation("Synced testimonial organizations from seed…");
        }

        await db.SaveChangesAsync();
    }
}
