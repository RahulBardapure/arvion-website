using Arvion.Application.Common;
using Arvion.Application.DTOs.Leads;
using Arvion.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Arvion.WebAPI.Controllers;

[ApiController]
[Route("api/v1/admin")]
[Authorize]
public class AdminController : ControllerBase
{
    private readonly ILeadService _leads;

    public AdminController(ILeadService leads) => _leads = leads;

    /// <summary>List demo leads. Protected by JWT (phase 1 light auth).</summary>
    [HttpGet("leads")]
    public async Task<IActionResult> ListLeads(CancellationToken ct)
    {
        var items = await _leads.ListDemoRequestsAsync(ct);
        return Ok(ApiResponse<IReadOnlyList<DemoRequestDto>>.Ok(items));
    }
}
