import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header-toolbar',
    templateUrl: './header-toolbar.component.html',
    styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

    public settingsItems: any[] = [{

        title: 'Manage Users',
        path: '/settings/users'

    }];

    public constructor() {
    }

    public ngOnInit() {
    }

}
