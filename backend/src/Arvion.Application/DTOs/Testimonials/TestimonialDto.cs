namespace Arvion.Application.DTOs.Testimonials;

public class TestimonialDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Organization { get; set; } = string.Empty;
    public string Quote { get; set; } = string.Empty;
    public int Rating { get; set; }
    public string? AvatarUrl { get; set; }
}
