import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { map, Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [``],
})
export class SearchPageComponent implements OnInit {
  myControl = new FormControl<string | Hero>('');
  options: Hero[] = [];
  filteredOptions!: Observable<Hero[]>;
  selectedHero?: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe((h) => {
      this.options = h;

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const superhero =
            typeof value === 'string' ? value : value?.superhero;
          return superhero
            ? this._filter(superhero as string)
            : this.options.slice(0, 6);
        })
      );

      this.myControl.valueChanges.subscribe((value) => {
        if (typeof value === 'string') {
          this.selectedHero = undefined;
        } else {
          const selected = this.options.find(
            (option) => option.superhero === value?.superhero
          );
          this.selectedHero = selected ? selected : undefined;
        }
      });
    });
  }

  displayFn(hero: Hero): string {
    return hero && hero.superhero ? hero.superhero : '';
  }

  private _filter(superhero: string): Hero[] {
    const filterValue = superhero.toLowerCase();
    return this.options.filter((option) =>
      option.superhero.toLowerCase().includes(filterValue)
    );
  }
}
