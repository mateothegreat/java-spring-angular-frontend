import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({

    selector: 'app-header-toolbar-item',
    encapsulation: ViewEncapsulation.Emulated,
    template: `

        <li class="nav-item" routerLinkActive="active">

            <a class="nav-link" [routerLink]="[path]">

                <i *ngIf="icon" class="icon fas {{ icon }}"></i>
                
                <span>{{ title }}</span>

            </a>

        </li>

    `,
    styles: []

})
export class HeaderToolbarItemComponent {

    @Input() public title: string;
    @Input() public path: string;
    @Input() public icon: string;

}
