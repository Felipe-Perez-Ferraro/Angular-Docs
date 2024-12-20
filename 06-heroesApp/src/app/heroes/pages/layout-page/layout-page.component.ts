import { Component } from '@angular/core'; 
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  get currentUser(): User | undefined {
    return this.authService.currentUser;
  }


  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
