import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {SessionService} from '../_lib/SessionService';
import {UsersService} from '../settings-users/UsersService';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../settings-users/User';

@Component({
    selector: 'app-session-login',
    templateUrl: './session-login.component.html',
    styleUrls: ['./session-login.component.scss']
})
export class SessionLoginComponent {

    public formGroup: FormGroup = new FormGroup({

        username: new FormControl('admin', Validators.required),
        password: new FormControl('admin', Validators.required),

    }, {updateOn: 'blur'});

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       private usersService: UsersService,
                       private sessionService: SessionService) {
    }

    public onButtonSigninClick(): void {

        console.log(this.formGroup.value);

        this.usersService.login(this.formGroup.controls['username'].value, this.formGroup.controls['password'].value).subscribe((user: User) => {

            SessionService.storageSet(user);

            // this.router.navigate(['/dashboard']);
            location.href = '/dashboard';

        }, (() => {

            this.toastr.error('Invalid username or password.');

        }));

    }

}
