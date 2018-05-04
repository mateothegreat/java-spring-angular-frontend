import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../settings-users/User';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../settings-users/UsersService';

@Component({
    selector: 'app-settings-users-manage',
    templateUrl: './settings-users-manage.component.html',
    styleUrls: ['./settings-users-manage.component.scss']
})
export class SettingsUsersManageComponent {

    public user: User;

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }, {

        path: '/settings',
        title: 'Settings'

    }, {

        path: '/users',
        title: 'Users'

    }];

    public formGroup: FormGroup = new FormGroup({

        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),

    }, {updateOn: 'blur'});

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       private usersService: UsersService) {

        this.route.params.subscribe((params) => {

            if (params.userId) {

                this.usersService.getById(params.userId).subscribe((user: User) => {

                    this.user = user;

                    this.formGroup.controls['username'].setValue(user.username);
                    this.formGroup.controls['password'].setValue(user.password);

                });

            }

        });

    }

    public onButtonDeleteClick(): void {

        this.usersService.deleteById(this.user.id).subscribe(() => {

            this.toastr.success(`The user "${this.user.username}" has been deleted!`);

            this.router.navigate(['/settings/users']);

        });

    }

    public onButtonSaveClick(): void {

        if (this.user && this.user.id) {

            this.usersService.updateById(this.user.id, this.formGroup.value).subscribe(() => {

                this.toastr.success(`Your changes have been saved!'`);

            });

        } else {

            this.usersService.create(this.formGroup.value).subscribe((user: User) => {

                this.toastr.success(`The user "${user.username}" has been created!`);
                this.router.navigate([`/settings/users/${user.id}`]);

            });

        }

    }

}
