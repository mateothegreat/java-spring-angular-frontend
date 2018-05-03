import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }];

    public constructor() {
    }

    public ngOnInit() {
    }

}
