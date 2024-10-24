import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = 'awesome gif';

  public imageLoaded: boolean = false;

  onLoad(): boolean {
    return (this.imageLoaded = true);
  }

  ngOnInit(): void {
    if (!this.url) throw new Error('Method url not implemented.');
  }
}
