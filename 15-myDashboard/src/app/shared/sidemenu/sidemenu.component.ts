import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'shared-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {
  public menuItems = routes
    .map((r) => r.children ?? [])
    .flat()
    .filter((r) => r && r.path)
    .filter((r) => !r.path?.includes(':'));
}
