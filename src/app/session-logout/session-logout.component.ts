import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../_lib/SessionService';

@Component({
    selector: 'app-session-logout',
    templateUrl: './session-logout.component.html',
    styleUrls: ['./session-logout.component.scss']
})
export class SessionLogoutComponent {

    public constructor(private router: Router) {

        SessionService.storageRemove();

        // this.router.navigate(['/login']);

        location.href = '/login';

    }

}
