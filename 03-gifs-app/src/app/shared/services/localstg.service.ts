import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstgService {
  saveLocalStorage(tags: string[]): void {
    localStorage.setItem('history', JSON.stringify(tags));
  }

  getLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem('history')!);
  }

  deleteLocalStorageGif(tags: string[]): void {
    localStorage.setItem('history', JSON.stringify(tags));
  }
}
