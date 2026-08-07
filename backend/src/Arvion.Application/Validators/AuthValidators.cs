using FluentValidation;
using Arvion.Application.DTOs.Auth;

namespace Arvion.Application.Validators;

public class AdminLoginValidator : AbstractValidator<AdminLoginDto>
{
    public AdminLoginValidator()
    {
        RuleFor(x => x.Email).NotEmpty().EmailAddress().MaximumLength(200);
        RuleFor(x => x.Password).NotEmpty().MaximumLength(200);
    }
}
