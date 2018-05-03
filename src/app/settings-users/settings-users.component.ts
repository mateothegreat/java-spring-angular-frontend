import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-settings-users',
    templateUrl: './settings-users.component.html',
    styleUrls: ['./settings-users.component.scss']
})
export class SettingsUsersComponent implements OnInit {


    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }, {

        path: '/settings',
        title: 'Settings'

    }, {

        path: '/users',
        title: 'Users'

    }];

    public constructor() {
    }

    public ngOnInit() {
    }
}
