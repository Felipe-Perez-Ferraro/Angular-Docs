import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public isFinishedAuth = computed<boolean>(() => {
    console.log(this.authService.authStatus());
    if (this.authService.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  });

  public authStatusEffect = effect(() => {
    switch (this.authService.authStatus()) {
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        return;
    }
  });
}
