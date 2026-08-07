using Arvion.Domain.Common;
using Arvion.Domain.Enums;

namespace Arvion.Domain.Entities;

public class DemoRequest : BaseEntity
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string CountryCode { get; set; } = "+91";
    public string InstituteName { get; set; } = string.Empty;
    public string ProductInterest { get; set; } = "digital-school";
    public string? Message { get; set; }
    public string? SourcePage { get; set; }
    public DemoRequestStatus Status { get; set; } = DemoRequestStatus.New;
}
