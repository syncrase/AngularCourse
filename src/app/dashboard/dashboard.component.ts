
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    // selector: 'app-dashboard',// No needs of that if the component is accessed by routes and not by tags
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    // receivedThing: String
    // propInDash: String = "hi"

    constructor(private heroService: HeroService, private toastr: ToastrService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }



    popupClick(heroName) {
        this.toastr.success(heroName);
    }
}
