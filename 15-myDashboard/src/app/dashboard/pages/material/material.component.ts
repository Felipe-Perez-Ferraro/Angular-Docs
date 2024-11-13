import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BottomSheetExComponent } from './ui/bottom-sheet-ex/bottom-sheet-ex.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
  ],
  templateUrl: './material.component.html',
})
export default class MaterialComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetExComponent);
  }
}
