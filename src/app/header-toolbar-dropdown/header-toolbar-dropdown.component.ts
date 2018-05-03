import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-header-toolbar-dropdown',
    templateUrl: './header-toolbar-dropdown.component.html',
    styleUrls: ['./header-toolbar-dropdown.component.scss']
})
export class HeaderToolbarDropdownComponent implements OnInit {

    @Input() public title: string;
    @Input() public path: string;
    @Input() public items: any[];
    @Input() public icon: string;
    
    public constructor() {
    }

    public ngOnInit() {
    }

}
