import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';

//Don't forget the parentheses. Omitting them leads to an error that's difficult to diagnose
@Injectable() 
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 3000);
        });
    }
}