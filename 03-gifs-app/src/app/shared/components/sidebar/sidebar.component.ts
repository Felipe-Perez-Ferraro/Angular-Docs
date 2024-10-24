import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tagsHistory(): string[] {
    return this.gifsService.tagHistory;
  }

  searchBtnTag(tagSelected: string): void {
    this.gifsService.searchTag(tagSelected);
  }

  deleteTag(tagSelected: string): void {
    this.gifsService.deleteGif(tagSelected);
  }
}
