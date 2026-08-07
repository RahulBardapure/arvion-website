using Arvion.Application.Common;
using Arvion.Application.DTOs.Leads;
using Arvion.Application.Interfaces;
using Arvion.WebAPI.Middleware;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace Arvion.WebAPI.Controllers;

[ApiController]
[Route("api/v1/leads")]
public class LeadsController : ControllerBase
{
    private readonly ILeadService _leads;
    private readonly IValidator<CreateDemoRequestDto> _demoValidator;
    private readonly IValidator<CreateContactMessageDto> _contactValidator;

    public LeadsController(
        ILeadService leads,
        IValidator<CreateDemoRequestDto> demoValidator,
        IValidator<CreateContactMessageDto> contactValidator)
    {
        _leads = leads;
        _demoValidator = demoValidator;
        _contactValidator = contactValidator;
    }

    [HttpPost("demo")]
    [AllowAnonymous]
    [EnableRateLimiting("leads")]
    public async Task<IActionResult> CreateDemo([FromBody] CreateDemoRequestDto dto, CancellationToken ct)
    {
        var invalid = await dto.ValidateAsync(_demoValidator);
        if (invalid is not null) return invalid;

        var result = await _leads.CreateDemoRequestAsync(dto, ct);
        return Ok(ApiResponse<DemoRequestDto>.Ok(result, "Thank you! Our team will contact you shortly."));
    }

    [HttpPost("contact")]
    [AllowAnonymous]
    [EnableRateLimiting("leads")]
    public async Task<IActionResult> CreateContact([FromBody] CreateContactMessageDto dto, CancellationToken ct)
    {
        var invalid = await dto.ValidateAsync(_contactValidator);
        if (invalid is not null) return invalid;

        await _leads.CreateContactMessageAsync(dto, ct);
        return Ok(ApiResponse.Ok("Message received. We will get back to you soon."));
    }
}
