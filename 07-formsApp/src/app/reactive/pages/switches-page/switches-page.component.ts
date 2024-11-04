import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup;
  public person = {
    gender: 'F',
    wantNotifications: false,
  };

  constructor(
    private fb: FormBuilder,
    private reactiveService: ReactiveService
  ) {
    this.myForm = this.fb.group({
      gender: ['M', Validators.required],
      wantNotifications: [true, Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
    });
  }

  isValidField(field: string): boolean | null {
    return this.reactiveService.checkValidField(this.myForm, field);
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;
    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
  }

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }
}
