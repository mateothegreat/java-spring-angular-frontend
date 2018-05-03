import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Cake} from './Cake';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CakesService {

    public static readonly BASE_URL: string = 'http://localhost:8081';

    public constructor(private httpClient: HttpClient) {

    }

    public get(): Observable<Cake[]> {

        return this.httpClient.get<Cake[]>(`${CakesService.BASE_URL}/cakes`);

    }

    public create(cake: Cake): Observable<Cake> {

        return this.httpClient.post<Cake>(`${CakesService.BASE_URL}/cakes`, cake);

    }

    public getById(id: number): Observable<Cake> {

        return this.httpClient.get<Cake>(`${CakesService.BASE_URL}/cakes/${id}`);

    }

    public deleteById(id: number): Observable<Cake> {

        return this.httpClient.delete<Cake>(`${CakesService.BASE_URL}/cakes/${id}`);

    }

    public updateById(id: number, cake: Cake): Observable<Cake> {

        return this.httpClient.put<Cake>(`${CakesService.BASE_URL}/cakes/${id}`, cake);

    }


}
