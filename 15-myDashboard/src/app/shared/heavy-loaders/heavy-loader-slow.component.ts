import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loader-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 [ngClass]="['h-[600px] w-full', cssClass]">
    Heavy Loader Slow
  </h1>`,
})
export class HeavyLoaderSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}

    console.log('Heavy Loader Slow - Cargado');
  }
}
