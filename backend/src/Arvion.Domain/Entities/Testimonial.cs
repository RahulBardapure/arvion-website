using Arvion.Domain.Common;

namespace Arvion.Domain.Entities;

public class Testimonial : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Organization { get; set; } = string.Empty;
    public string Quote { get; set; } = string.Empty;
    public int Rating { get; set; } = 5;
    public string? AvatarUrl { get; set; }
    public bool IsPublished { get; set; } = true;
    public int SortOrder { get; set; }
}
