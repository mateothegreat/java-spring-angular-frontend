import {Component, OnInit, ViewChild} from '@angular/core';
import {CakesService} from '../_lib/cakes.service';
import {Cake} from '../_lib/Cake';
import {DataTableComponent} from '../_lib/DataTableComponent';
import {Router} from '@angular/router';
import {PageRequest} from '../_lib/PageRequest';

@Component({
    selector: 'app-cakes',
    templateUrl: './cakes.component.html',
    styleUrls: ['./cakes.component.scss']
})
export class CakesComponent implements OnInit {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<Cake>;

    public cakes: Cake[];

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }];

    public constructor(private cakesService: CakesService,
                       private router: Router) {

    }

    public ngOnInit() {

        this.datatableRef.clicks$.subscribe((cake: Cake) => {

            if (cake.id) {

                this.router.navigate([`/cakes/${cake.id}`]);

            }

        });

        this.cakesService.get().subscribe((cakes: Cake[]) => {

            this.datatableRef.setPage(new PageRequest(), cakes);

        });

    }

    public onButtonCreateClick(e: any) {

        this.router.navigate(['/cakes/create']);

    }

}
