using Arvion.Application.Common;
using Arvion.Application.DTOs.Testimonials;
using Arvion.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Arvion.WebAPI.Controllers;

[ApiController]
[Route("api/v1/testimonials")]
public class TestimonialsController : ControllerBase
{
    private readonly ITestimonialService _testimonials;

    public TestimonialsController(ITestimonialService testimonials) => _testimonials = testimonials;

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetPublished(CancellationToken ct)
    {
        var items = await _testimonials.GetPublishedAsync(ct);
        return Ok(ApiResponse<IReadOnlyList<TestimonialDto>>.Ok(items));
    }
}
