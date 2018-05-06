import {Component, Input} from '@angular/core';

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
export class HeaderBreadcrumbsComponent {

    @Input() public title: string;
    @Input() public crumbs: any[];

}
