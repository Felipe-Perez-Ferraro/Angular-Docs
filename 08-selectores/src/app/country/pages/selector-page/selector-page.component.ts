import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../../services/country.service';
import { Region, SmallCountry } from '../../interfaces/Country.interface';
import { filter, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'shared-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup;
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService) {
    this.myForm = this.fb.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      border: ['', Validators.required],
    });
  }

  get regions(): Region[] {
    return this.countryService.regions;
  }

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  private onRegionChanged(): void {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => (this.borders = [])),
        switchMap((reg) =>
          this.countryService.getCountriesByRegion(reg as Region)
        )
      )
      .subscribe((value) => (this.countriesByRegion = value));
  }

  private onCountryChanged(): void {
    this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value: string) => value.length > 0),
        switchMap((code) => this.countryService.getCountryByAlphaCode(code)),
        switchMap((country) =>
          this.countryService.getCountriesByCode(country.borders)
        )
      )
      .subscribe(( countries ) => (this.borders = countries));
  }
}
