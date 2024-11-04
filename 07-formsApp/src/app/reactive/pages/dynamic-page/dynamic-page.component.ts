import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  public myForm;
  public newFavorite = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private reactiveService: ReactiveService
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([]),
    });
  }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return this.reactiveService.checkValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    return this.reactiveService.getError(this.myForm, field);
  }

  isValidFieldArray(formArray: FormArray, index: number): boolean | null {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  onAddToFavorite(): void {
    if (this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;
    this.favoriteGames.push(this.fb.control(newGame));

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
