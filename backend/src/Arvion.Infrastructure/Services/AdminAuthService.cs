using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Arvion.Application.DTOs.Auth;
using Arvion.Application.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Arvion.Infrastructure.Services;

public class AdminOptions
{
    public const string SectionName = "Admin";
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class AdminAuthService : IAdminAuthService
{
    private readonly IConfiguration _configuration;
    private readonly AdminOptions _admin;

    public AdminAuthService(IConfiguration configuration)
    {
        _configuration = configuration;
        _admin = configuration.GetSection(AdminOptions.SectionName).Get<AdminOptions>() ?? new AdminOptions();
    }

    public Task<AdminLoginResponseDto?> LoginAsync(AdminLoginDto dto, CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(_admin.Email) || string.IsNullOrWhiteSpace(_admin.Password))
            return Task.FromResult<AdminLoginResponseDto?>(null);

        var email = dto.Email.Trim();
        var password = dto.Password;

        if (!string.Equals(email, _admin.Email.Trim(), StringComparison.OrdinalIgnoreCase)
            || !string.Equals(password, _admin.Password, StringComparison.Ordinal))
        {
            return Task.FromResult<AdminLoginResponseDto?>(null);
        }

        var jwtKey = _configuration["Jwt:Key"] ?? "DEV_ONLY_CHANGE_ME_TO_A_LONG_RANDOM_SECRET_KEY_32+";
        var issuer = _configuration["Jwt:Issuer"] ?? "Arvion";
        var audience = _configuration["Jwt:Audience"] ?? "ArvionAdmin";
        var expires = DateTime.UtcNow.AddHours(12);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, email),
            new Claim(JwtRegisteredClaimNames.Email, email),
            new Claim(ClaimTypes.Role, "Admin"),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            expires: expires,
            signingCredentials: creds);

        var result = new AdminLoginResponseDto
        {
            Token = new JwtSecurityTokenHandler().WriteToken(token),
            Email = email,
            ExpiresAt = expires,
        };

        return Task.FromResult<AdminLoginResponseDto?>(result);
    }
}
