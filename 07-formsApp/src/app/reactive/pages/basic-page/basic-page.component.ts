import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reactiveService: ReactiveService
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    });
  }

  isValidField(field: string): boolean | null {
    return this.reactiveService.checkValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    return this.reactiveService.getError(this.myForm, field);
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
