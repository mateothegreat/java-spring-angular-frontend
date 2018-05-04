import {Component} from '@angular/core';
import {SessionService} from './_lib/SessionService';
import {User} from './settings-users/User';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public user: User = SessionService.storageGet();

    public constructor(public sessionService: SessionService) {

    }

}
