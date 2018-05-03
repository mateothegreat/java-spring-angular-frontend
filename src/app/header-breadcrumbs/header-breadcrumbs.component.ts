import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-header-breadcrumbs',
    template: `

        <div class="slim-pageheader">

            <ol class="breadcrumb slim-breadcrumb">

                <li *ngFor="let crumb of crumbs" class="breadcrumb-item">

                    <a [routerLink]="[ crumb.path ]">{{ crumb.title }}</a>

                </li>

                <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>

            </ol>

            <h6 class="slim-pagetitle">{{ title }}</h6>

        </div>

    `,
    styles: []
})
export class HeaderBreadcrumbsComponent implements OnInit {

    @Input() public title: string;
    @Input() public crumbs: any[];

    public constructor(private router: Router,
                       private route: ActivatedRoute) {

        this.router.events.subscribe((e) => {

            // console.log(e);

        });

        this.route.params.subscribe((params) => {

            console.log(params);
            console.log(this.router.url);

        });

    }

    public ngOnInit() {
    }

}
