import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {SessionService} from './SessionService';

@Injectable()
export class AuthGuard implements CanActivate {

    public constructor(private router: Router,
                       private sessionService: SessionService) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.sessionService.user) {

            return true;

        }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});

        return false;

    }

}
