using Arvion.Application.Common;
using Arvion.Application.DTOs.Auth;
using Arvion.Application.Interfaces;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace Arvion.WebAPI.Controllers;

[ApiController]
[Route("api/v1/auth")]
public class AuthController : ControllerBase
{
    private readonly IAdminAuthService _auth;
    private readonly IValidator<AdminLoginDto> _validator;

    public AuthController(IAdminAuthService auth, IValidator<AdminLoginDto> validator)
    {
        _auth = auth;
        _validator = validator;
    }

    [HttpPost("login")]
    [AllowAnonymous]
    [EnableRateLimiting("leads")]
    public async Task<IActionResult> Login([FromBody] AdminLoginDto dto, CancellationToken ct)
    {
        var validation = await _validator.ValidateAsync(dto, ct);
        if (!validation.IsValid)
        {
            var errors = validation.Errors
                .GroupBy(e => e.PropertyName)
                .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());
            return BadRequest(ApiResponse<object>.Fail("Validation failed", errors));
        }

        var result = await _auth.LoginAsync(dto, ct);
        if (result is null)
            return Unauthorized(ApiResponse<object>.Fail("Invalid email or password."));

        return Ok(ApiResponse<AdminLoginResponseDto>.Ok(result));
    }
}
