import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  imports: [MatListModule],
  templateUrl: './bottom-sheet-ex.component.html',
  styles: ``,
})
export class BottomSheetExComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetExComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
