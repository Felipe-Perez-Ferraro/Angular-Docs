import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: `./loading-spinner.css`,
})
export class LoadingSpinnerComponent {
  @Input()
  public buscandoTxt: string = '';
}
