import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button type="button" (click)="increaseBy(1)">+1</button>
    <button type="button" class="mx-2" (click)="resetCounter()">Reset</button>
    <button type="button" (click)="decreaseBy(1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void {
    if (this.counter === 5) return;
    this.counter += value;
  }

  decreaseBy(value: number): void {
    if (this.counter === 0) return;
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
