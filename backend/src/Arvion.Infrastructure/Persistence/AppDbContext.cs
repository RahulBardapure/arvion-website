using Arvion.Domain.Common;
using Arvion.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Arvion.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<DemoRequest> DemoRequests => Set<DemoRequest>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
    public DbSet<Testimonial> Testimonials => Set<Testimonial>();
    public DbSet<SiteConfig> SiteConfigs => Set<SiteConfig>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DemoRequest>(e =>
        {
            e.HasKey(x => x.Id);
            e.Property(x => x.FullName).HasMaxLength(120).IsRequired();
            e.Property(x => x.Email).HasMaxLength(200).IsRequired();
            e.Property(x => x.Phone).HasMaxLength(20).IsRequired();
            e.Property(x => x.CountryCode).HasMaxLength(8).IsRequired();
            e.Property(x => x.InstituteName).HasMaxLength(200).IsRequired();
            e.Property(x => x.ProductInterest).HasMaxLength(100);
            e.Property(x => x.Message).HasMaxLength(2000);
            e.Property(x => x.SourcePage).HasMaxLength(200);
            e.HasQueryFilter(x => !x.IsDeleted);
            e.HasIndex(x => x.CreatedAt);
            e.HasIndex(x => x.Status);
        });

        modelBuilder.Entity<ContactMessage>(e =>
        {
            e.HasKey(x => x.Id);
            e.Property(x => x.FullName).HasMaxLength(120).IsRequired();
            e.Property(x => x.Email).HasMaxLength(200).IsRequired();
            e.Property(x => x.Phone).HasMaxLength(20);
            e.Property(x => x.Subject).HasMaxLength(200).IsRequired();
            e.Property(x => x.Message).HasMaxLength(4000).IsRequired();
            e.HasQueryFilter(x => !x.IsDeleted);
        });

        modelBuilder.Entity<Testimonial>(e =>
        {
            e.HasKey(x => x.Id);
            e.Property(x => x.Name).HasMaxLength(120).IsRequired();
            e.Property(x => x.Role).HasMaxLength(100).IsRequired();
            e.Property(x => x.Organization).HasMaxLength(200).IsRequired();
            e.Property(x => x.Quote).HasMaxLength(2000).IsRequired();
            e.Property(x => x.AvatarUrl).HasMaxLength(500);
            e.HasQueryFilter(x => !x.IsDeleted);
            e.HasIndex(x => new { x.IsPublished, x.SortOrder });
        });

        modelBuilder.Entity<SiteConfig>(e =>
        {
            e.HasKey(x => x.Id);
            e.Property(x => x.Key).HasMaxLength(100).IsRequired();
            e.Property(x => x.Value).HasMaxLength(1000).IsRequired();
            e.HasIndex(x => x.Key).IsUnique();
            e.HasQueryFilter(x => !x.IsDeleted);
        });

        base.OnModelCreating(modelBuilder);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        foreach (var entry in ChangeTracker.Entries<BaseEntity>())
        {
            if (entry.State == EntityState.Modified)
                entry.Entity.ModifiedAt = DateTime.UtcNow;
        }

        return base.SaveChangesAsync(cancellationToken);
    }
}
