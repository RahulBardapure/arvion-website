using FluentValidation;
using Arvion.Application.DTOs.Leads;

namespace Arvion.Application.Validators;

public class CreateDemoRequestValidator : AbstractValidator<CreateDemoRequestDto>
{
    public CreateDemoRequestValidator()
    {
        RuleFor(x => x.FullName).NotEmpty().MaximumLength(120);
        RuleFor(x => x.Email).NotEmpty().EmailAddress().MaximumLength(200);
        RuleFor(x => x.Phone).NotEmpty().MaximumLength(20)
            .Matches(@"^[0-9+\-\s()]{7,20}$").WithMessage("Enter a valid phone number.");
        RuleFor(x => x.CountryCode).NotEmpty().MaximumLength(8);
        RuleFor(x => x.InstituteName).NotEmpty().MaximumLength(200);
        RuleFor(x => x.ProductInterest).MaximumLength(100);
        RuleFor(x => x.Message).MaximumLength(2000);
        RuleFor(x => x.SourcePage).MaximumLength(200);
    }
}

public class CreateContactMessageValidator : AbstractValidator<CreateContactMessageDto>
{
    public CreateContactMessageValidator()
    {
        RuleFor(x => x.FullName).NotEmpty().MaximumLength(120);
        RuleFor(x => x.Email).NotEmpty().EmailAddress().MaximumLength(200);
        RuleFor(x => x.Phone).MaximumLength(20);
        RuleFor(x => x.Subject).NotEmpty().MaximumLength(200);
        RuleFor(x => x.Message).NotEmpty().MaximumLength(4000);
    }
}
