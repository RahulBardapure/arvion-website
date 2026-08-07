using Arvion.Domain.Common;

namespace Arvion.Domain.Entities;

public class SiteConfig : BaseEntity
{
    public string Key { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
}
