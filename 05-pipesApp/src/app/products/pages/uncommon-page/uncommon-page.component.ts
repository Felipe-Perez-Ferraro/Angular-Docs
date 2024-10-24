import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Felipe';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Felipa';
    this.gender = 'female';
  }

  // i18n Plural && Slice Pipe
  public clients: string[] = ['Pepe', 'Pepon', 'Pepus', 'Carlos', 'Messi'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Felipe',
    age: 21,
    gender: 'Male',
  };

  // Async Pipe
  public myObservable: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );

  public myPromise: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('Tenemos data en la promise');
    }, 3500);
  });
}
