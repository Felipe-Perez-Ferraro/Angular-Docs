import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameUppercase: string = 'feli';
  public namelowercase: string = 'FELI';
  public nameTitlecase: string = 'FeLi';
  public customDate: Date = new Date();
}
