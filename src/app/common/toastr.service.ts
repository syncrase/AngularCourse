import { Injectable } from '@angular/core';
// import { toastr } from '@toastr/build';

declare let toastr: any;

@Injectable({
    providedIn: 'root'
})
export class ToastrService {

    constructor() { }

    success(message: string, title?: string) {
        alert('Let\'see if toastr works!');
        toastr.success(message, title);
    }
    info(message: string, title?: string) {
        toastr.info(message, title);
    }
    warning(message: string, title?: string) {
        toastr.warning(message, title);
    }
    error(message: string, title?: string) {
        toastr.error(message, title);
    }

}
