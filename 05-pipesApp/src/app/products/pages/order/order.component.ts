import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.BLUE,
    },
    {
      name: 'Sipderman',
      canFly: false,
      color: Color.RED,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.BLACK,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.BROWN,
    },
  ];
  public orderBy?: keyof Hero;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
