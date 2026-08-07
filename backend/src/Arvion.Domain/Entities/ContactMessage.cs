using Arvion.Domain.Common;

namespace Arvion.Domain.Entities;

public class ContactMessage : BaseEntity
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string? SourcePage { get; set; }
    public bool IsRead { get; set; }
}
