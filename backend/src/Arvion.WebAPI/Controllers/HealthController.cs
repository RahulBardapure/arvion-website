using Arvion.Application.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Arvion.WebAPI.Controllers;

[ApiController]
[Route("api/v1/health")]
public class HealthController : ControllerBase
{
    [HttpGet]
    [AllowAnonymous]
    public IActionResult Get() =>
        Ok(ApiResponse<object>.Ok(new { status = "healthy", utc = DateTime.UtcNow }, "OK"));
}
