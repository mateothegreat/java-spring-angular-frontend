import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from './User';
import {DataTableComponent} from '../_lib/DataTableComponent';
import {UsersService} from './UsersService';
import {Router} from '@angular/router';
import {PageRequest} from '../_lib/PageRequest';

@Component({
    selector: 'app-settings-users',
    templateUrl: './settings-users.component.html',
    styleUrls: ['./settings-users.component.scss']
})
export class SettingsUsersComponent implements OnInit {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<User>;

    public users: User[];

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

    public constructor(private usersService: UsersService,
                       private router: Router) {
    }

    public ngOnInit() {

        this.datatableRef.clicks$.subscribe((user: User) => {

            if (user.id) {

                this.router.navigate([`/settings/users/${user.id}`]);

            }

        });

        this.usersService.get().subscribe((users: User[]) => {

            this.datatableRef.setPage(new PageRequest(), users);

        });

    }

    public onButtonCreateClick(e: any) {

        this.router.navigate(['/settings/users/create']);

    }

}
