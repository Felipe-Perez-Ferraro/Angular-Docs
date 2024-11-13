import { Component, input, output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'ui-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  public product = input.required<Product>();
  public onIncrementQuantity = output<number>();

  incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}
