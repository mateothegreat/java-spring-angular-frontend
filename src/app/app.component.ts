import {Component} from '@angular/core';
import {SessionService} from './_lib/SessionService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public constructor(public sessionService: SessionService) {

    }

}
