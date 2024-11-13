import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <shared-title [title]="currFramework()" />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProp | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public currFramework = computed(
    () => `Current Framework - ${this.frameworkAsSignal().name}`
  );
  public frameworkAsSignal = signal({
    name: 'Angular',
    release: 2016,
  });
  public frameworkAsProp = {
    name: 'Angular',
    release: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((val) => ({
        ...val,
        name: 'React',
      }));

      this.frameworkAsProp.name = 'Spring';

      console.log('Listo');
    }, 3000);
  }
}
