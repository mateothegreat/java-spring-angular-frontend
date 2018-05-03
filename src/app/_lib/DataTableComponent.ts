import {Component, Input} from '@angular/core';
import {Page} from './Page';
import {PageRequest} from './PageRequest';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Numbers} from './Numbers';

@Component({
    selector: 'data-table',
    // templateUrl: './organizations-search.component.html',
    styles: [],
    template: `

        <ngx-datatable
            class="material"
            [rows]="rows"
            [columns]="columns"
            [columnMode]="'force'"
            [headerHeight]="50"
            [footerHeight]="50"
            [rowHeight]="'auto'"

            [externalPaging]="true"
            [count]="page?.count"
            [offset]="page?.offset"
            [limit]="page?.limit"

            [selected]="selected"
            [selectionType]="'single'"

            (activate)="onActivate($event)"
            (select)='onSelect($event)'
            (page)='onPageClick($event)'>

        </ngx-datatable>

    `
})
export class DataTableComponent<T> {

    @Input() public columns: string[] = [];
    @Input() public rows: any[] = [];
    @Input() public page: Page = new Page();

    private selected = [];

    private _stream: BehaviorSubject<{}> = new BehaviorSubject<{}>({});
    public stream$: Observable<{}> = this._stream.asObservable();

    private _clicks: BehaviorSubject<T> = new BehaviorSubject<T>(<T>{});
    public clicks$: Observable<T> = this._clicks.asObservable();

    public onPageClick($event): void {

        this._stream.next($event);

    }

    public setPage(pageRequest?: PageRequest, results?: any) {

        pageRequest = pageRequest || new PageRequest();

        this.page = new Page();
        this.page.count = results.length || 0;
        this.page.limit = (Numbers.getNumber(pageRequest.pageSize)) ? Numbers.getNumber(pageRequest.pageSize) : 20;
        this.page.totalPages = Math.ceil(this.page.count / this.page.limit);
        this.page.offset = Numbers.getNumber(pageRequest.offset);

        this.rows = results;

    }

    public onSelect({selected}) {
        console.log('Select Event', selected, this);
    }

    public onActivate(event) {

        if (event.type === 'click') {

            this._clicks.next(event.row);

        }

    }

}
