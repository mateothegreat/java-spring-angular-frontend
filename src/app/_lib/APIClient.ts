import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PageRequest} from './PageRequest';

@Injectable()
export class APIClient {

    public static readonly BASE_URL: string = 'http://localhost:3000';

    public constructor(private httpClient: HttpClient) {

    }

    public get<T>(url: string): Observable<T> {

        return this.httpClient.get<T>(`${APIClient.BASE_URL}/${url}`);

    }

    public search<T>(url: string, pageRequest: PageRequest): Observable<any> {

        return this.httpClient.get<T>(`${APIClient.BASE_URL}/${url}?terms=${pageRequest.terms}&limit=${pageRequest.limit}&offset=${pageRequest.offset}`);

    }

    public post<T>(url: string, body: any): Observable<T> {

        return this.httpClient.post<T>(`${APIClient.BASE_URL}/${url}`, body);

    }

}
