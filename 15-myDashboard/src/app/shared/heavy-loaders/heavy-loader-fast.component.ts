import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loader-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />
    </section>
  `,
})
export class HeavyLoaderFastComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('Heavy Loader Fast');
  }
}
