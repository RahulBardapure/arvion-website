using System.Net;
using System.Text.Json;
using Arvion.Application.Common;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace Arvion.WebAPI.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;
    private readonly IHostEnvironment _env;

    public ExceptionHandlingMiddleware(
        RequestDelegate next,
        ILogger<ExceptionHandlingMiddleware> logger,
        IHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (ValidationException ex)
        {
            var errors = ex.Errors
                .GroupBy(e => e.PropertyName)
                .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());

            await WriteAsync(context, HttpStatusCode.BadRequest,
                ApiResponse.Fail("Validation failed.", errors));
        }
        catch (InvalidOperationException ex)
        {
            await WriteAsync(context, HttpStatusCode.BadRequest, ApiResponse.Fail(ex.Message));
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception");
            var message = _env.IsDevelopment()
                ? "An unexpected error occurred."
                : "An unexpected error occurred. Please try again later.";
            await WriteAsync(context, HttpStatusCode.InternalServerError, ApiResponse.Fail(message));
        }
    }

    private static async Task WriteAsync(HttpContext context, HttpStatusCode code, ApiResponse body)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)code;
        await context.Response.WriteAsync(JsonSerializer.Serialize(body, new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        }));
    }
}

public static class ValidationFilterExtensions
{
    public static async Task<IActionResult?> ValidateAsync<T>(this T dto, IValidator<T> validator)
    {
        var result = await validator.ValidateAsync(dto);
        if (result.IsValid) return null;

        var errors = result.Errors
            .GroupBy(e => e.PropertyName)
            .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());

        return new BadRequestObjectResult(ApiResponse.Fail("Validation failed.", errors));
    }
}
