import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from '../services/hero.services';

@Component({ // import Component is required
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']     
})

export class HeroDetailComponent implements OnInit {
    hero: Hero; // import Input is required
    
    constructor(private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
        //this.router.navigate(['/dashboard'], { skipLocationChange: true }); 
    }

}