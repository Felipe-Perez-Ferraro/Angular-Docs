import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  private hmtlElement?: ElementRef<HTMLElement>;
  private _color: string = '';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrors();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.hmtlElement = el;
  }

  private setStyle(): void {
    if (!this.hmtlElement) return;

    this.hmtlElement!.nativeElement.style.color = this._color;
  }

  private setErrors(): void {
    if (!this.hmtlElement) return;
    if (!this._errors) {
      this.hmtlElement.nativeElement.innerText = 'Todo esta perfecto';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.hmtlElement.nativeElement.innerText = 'Campo Requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors['minlength']['requiredLength'];
      const current = this._errors['minlength']['actualLength'];

      this.hmtlElement.nativeElement.innerText = `Mínimo de caracteres ${min}. Tenés ${current}`;
      return;
    }

    if (errors.includes('email')) {
      this.hmtlElement.nativeElement.innerText = 'Email incorrecto';
      return;
    }
  }
}
