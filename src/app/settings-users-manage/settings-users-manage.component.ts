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

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }, {

        path: '/settings',
        title: 'Settings'

    }, {

        path: '/settings/users',
        title: 'Users'

    }];

    public user: User = new User();
    public disableInputs: boolean;
    public statuses: string[] = ['Active', 'Disabled'];

    public formGroup: FormGroup = new FormGroup({

        username: new FormControl(Validators.required),
        password: new FormControl(Validators.required),
        status: new FormControl('Active')

    }, {updateOn: 'blur'});

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       private usersService: UsersService) {

        this.route.params.subscribe((params) => {

            if (params.userId) {

                this.usersService.getById(params.userId).subscribe((user: User) => {

                    this.user = user;

                    if (this.user.username === 'admin') {

                        this.disableInputs = true;

                    }

                });

            }

        });

    }

    public onButtonDeleteClick(): void {

        if (this.user.username === 'admin') {

            this.toastr.warning('You cannot delete the admin account.');

        } else {

            this.usersService.deleteById(this.user.id).subscribe(() => {

                this.toastr.success(`The user "${this.user.username}" has been deleted!`);

                this.router.navigate(['/settings/users']);

            });

        }

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
