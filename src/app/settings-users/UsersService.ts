import {Injectable} from '@angular/core';
import {User} from './User';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Cake} from '../_lib/Cake';

@Injectable()
export class UsersService {

    public static readonly BASE_URL: string = 'https://angular-spring-backend.herokuapp.com';

    public constructor(private httpClient: HttpClient) {

    }

    public get(): Observable<User[]> {

        return this.httpClient.get<User[]>(`${UsersService.BASE_URL}/users`);

    }

    public create(cake: Cake): Observable<User> {

        return this.httpClient.post<User>(`${UsersService.BASE_URL}/users`, cake);

    }

    public getById(id: number): Observable<User> {

        return this.httpClient.get<User>(`${UsersService.BASE_URL}/users/${id}`);

    }

    public deleteById(id: number): Observable<User> {

        return this.httpClient.delete<User>(`${UsersService.BASE_URL}/users/${id}`);

    }

    public updateById(id: number, cake: User): Observable<User> {

        return this.httpClient.put<User>(`${UsersService.BASE_URL}/users/${id}`, cake);

    }

    public login(username: string, password: string): Observable<User> {

        return this.httpClient.post<User>(`${UsersService.BASE_URL}/users/login`, {

            username,
            password

        });

    }

}
