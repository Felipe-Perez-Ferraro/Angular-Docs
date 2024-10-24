import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { AlertsService } from '../../shared/services/alerts.service';
import { LocalstgService } from '../../shared/services/localstg.service';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'ZRHItMw5kJS6g33s4BRnt3zuFRCAyc5r';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(
    private http: HttpClient,
    private alert: AlertsService,
    private localstg: LocalstgService
  ) {
    this.getGifs();
  }

  get tagHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    if (tag.length === 0) {
      this.alert.generarAlerta('Error', 'Campo Vacío', 'error', 'Ok');
      return;
    }
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((old) => old !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.localstg.saveLocalStorage(this._tagsHistory);
  }

  searchTag(tag: string): void {
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '6')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((res) => {
        this.gifList = res.data;
      });
  }

  private getGifs(): void {
    if (!this.localstg.getLocalStorage) return;
    this._tagsHistory = this.localstg.getLocalStorage();

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  deleteGif(tagSelected: string): void {
    this._tagsHistory = this.tagHistory.filter(
      (tag: string) => tag !== tagSelected
    );
    this.localstg.deleteLocalStorageGif(this._tagsHistory);

    if (this._tagsHistory.length === 0) {
      this.gifList = [];
    }
  }
}
