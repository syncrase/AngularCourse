import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ToastrService } from '../common/toastr.service';

// declare let toastr;

@Component({
    // selector: 'app-hero-detail',// No needs of that if the component is accessed by routes and not by tags
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    // 2 ways of fill the input
    // <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    // @Input() hero: Hero;
    hero: Hero;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroService: HeroService,
        private location: Location,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        // JavaScript (+) operator converts the string to a number
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
        // this.router.navigate(['dashboard']);
    }

    save(): void {
        this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
    }


    popupMe() {
        // alert('passed');
        this.toastr.success('ok');
    }


}
