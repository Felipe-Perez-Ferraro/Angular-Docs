import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/heavy-loaders/heavy-loader-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoaderFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
})
export default class DeferOptionsComponent {}
