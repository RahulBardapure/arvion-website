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

    /// <summary>List demo leads. Protected by JWT.</summary>
    [HttpGet("leads")]
    public async Task<IActionResult> ListLeads(CancellationToken ct)
    {
        var items = await _leads.ListDemoRequestsAsync(ct);
        return Ok(ApiResponse<IReadOnlyList<DemoRequestDto>>.Ok(items));
    }

    /// <summary>Delete a demo lead (cleanup / free SQLite space).</summary>
    [HttpDelete("leads/{id:guid}")]
    public async Task<IActionResult> DeleteLead(Guid id, CancellationToken ct)
    {
        var deleted = await _leads.DeleteDemoRequestAsync(id, ct);
        if (!deleted)
            return NotFound(ApiResponse.Fail("Demo request not found."));

        return Ok(ApiResponse.Ok("Demo request deleted."));
    }
}
