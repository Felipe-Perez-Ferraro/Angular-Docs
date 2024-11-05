import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from '../../../products/products-routing.module';

@Component({
  standalone: true,
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Flechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: '/custom',
          },
        ],
      },
    ];
  }
}
