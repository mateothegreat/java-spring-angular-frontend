import {User} from '../settings-users/User';
import {APIClient} from './APIClient';
import {UserToken} from './UserToken';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {

    public static storageGet(): User {

        return JSON.parse(localStorage.getItem('currentUser')) as User;

    }

    public static storageSet(user: User): void {

        localStorage.setItem('currentUser', JSON.stringify(user));

    }

    public static storageRemove(): void {

        localStorage.removeItem('currentUser');

    }

    public readonly user: User;

    private tokens: any;
    private apiClient: APIClient<User>;

    public constructor() {

        this.user = SessionService.storageGet();

    }

    public tokensGet(): Observable<UserToken[]> {

        if (this.user) {

            return this.apiClient.get(`users/${this.user.id}/tokens`);

        }

    }

}
