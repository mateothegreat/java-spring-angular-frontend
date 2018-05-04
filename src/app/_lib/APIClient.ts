import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {PageRequest} from './PageRequest';

export class APIClient<T> {

    public static readonly BASE_URL: string = 'https://angular-spring-backend.herokuapp.com';

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
