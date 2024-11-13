import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    ProductCardComponent,
    ProductCardComponent,
  ],
  templateUrl: './input-output.component.html',
  styles: ``,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 0,
    },
  ]);

  updateProduct(prod: Product, quantity: number) {
    this.products.update((products) =>
      products.map((p) => (p.id === prod.id ? { ...p, quantity } : p))
    );
  }

  ngOnDestroy(): void {
    this.intervalProducts.unsubscribe();
  }

  private intervalProducts = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((prod) => [
          ...prod,
          {
            id: prod.length + 1,
            name: `Product ${prod.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();
}
