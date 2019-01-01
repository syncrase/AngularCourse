import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleOutputHere(data) {
        // this.heroService.messageService.add('You clicked!!!');
        console.log('received Data : ' + data);

    }

}
