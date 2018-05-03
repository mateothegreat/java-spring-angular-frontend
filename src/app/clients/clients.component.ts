import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableComponent} from '../_lib/DataTableComponent';
import {Cake} from '../_lib/Cake';
import {Router} from '@angular/router';
import {Client} from './Client';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<Cake>;

    private clients: Client[];

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }];

    public constructor(private router: Router) {
    }

    public ngOnInit() {
    }

    public onButtonCreateClick(e: any) {

        this.router.navigate(['/clients/create']);

    }

}
