import {Component, OnInit} from '@angular/core';
import {Client} from '../clients/Client';

@Component({
    selector: 'app-clients-manage',
    templateUrl: './clients-manage.component.html',
    styleUrls: ['./clients-manage.component.scss']
})
export class ClientsManageComponent implements OnInit {

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }, {

        path: '/clients',
        title: 'Clients'

    }];

    public client: Client;
    
    public constructor() {
    }

    public ngOnInit() {
    }

}
