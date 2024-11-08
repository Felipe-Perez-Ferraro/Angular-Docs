import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  public myForm: FormGroup;

  constructor() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register(): void {
    const { email, name, password } = this.myForm.value;
    this.authService.register(email, name, password).subscribe({
      next: () => this.router.navigateByUrl('/auth/login'),
      error: (errorMessage) => Swal.fire('Error', errorMessage, 'error'),
    });
  }
}
