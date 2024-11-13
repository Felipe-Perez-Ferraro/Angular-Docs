import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  template: ` <h1 class="text-3xl font-semibold mb-2">{{ title }}</h1> `,
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
}
