import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes/hero';
import { HeroService } from './services/hero.services';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  //providers: [HeroService] // Injectable service
})

export class HeroesComponent implements OnInit { // import OnInit is required, implement ngOnInit()
  title = 'Angular 4.0 Rocks';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { 
  }

  ngOnInit(): void {
    this.populateHeroes();
  }

  populateHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    //this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
