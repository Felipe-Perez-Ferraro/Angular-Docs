import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {
    this.myForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(
              this.validatorsService.firstNameAndLastnamePattern
            ),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validatorsService.emailPattern),
          ],
          [this.emailValidator],
        ],
        username: [
          '',
          [Validators.required, this.validatorsService.cantBeStrider],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', Validators.required],
      },
      {
        validators: [
          validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
        ],
      }
    );
  }

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
