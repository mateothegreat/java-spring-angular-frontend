import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/SharedModule';
import {HeaderComponent} from './header/header.component';
import {HeaderToolbarComponent} from './header-toolbar/header-toolbar.component';
import {HeaderSectionComponent} from './header-section/header-section.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderBreadcrumbsComponent} from './header-breadcrumbs/header-breadcrumbs.component';
import {HeaderToolbarItemComponent} from './header-toolbar/header-toolbar-item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {CakesComponent} from './cakes/cakes.component';
import {DataTableComponent} from './_lib/DataTableComponent';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {CakesService} from './_lib/cakes.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CakesManageComponent} from './cakes-manage/cakes-manage.component';
import {CakesCreateComponent} from './cakes-create/cakes-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderToolbarDropdownComponent} from './header-toolbar-dropdown/header-toolbar-dropdown.component';
import {ToastrModule} from 'ngx-toastr';
import {NgProgressInterceptor, NgProgressModule} from 'ngx-progressbar';
import {ClientsComponent} from './clients/clients.component';
import {ClientsManageComponent} from './clients-manage/clients-manage.component';
import {SettingsUsersComponent} from './settings-users/settings-users.component';
import {SettingsUsersManageComponent} from './settings-users-manage/settings-users-manage.component';
import {UsersService} from './settings-users/UsersService';
import {AuthGuard} from './_lib/AuthGuard';
import {SessionService} from './_lib/SessionService';
import {SessionLoginComponent} from './session-login/session-login.component';
import {SessionLogoutComponent} from './session-logout/session-logout.component';

@NgModule({

    declarations: [

        AppComponent,
        DataTableComponent,
        HeaderComponent,
        HeaderToolbarComponent,
        HeaderSectionComponent,
        FooterComponent,
        HeaderBreadcrumbsComponent,
        HeaderToolbarItemComponent,
        DashboardComponent,
        SettingsComponent,
        CakesComponent,
        CakesManageComponent,
        CakesCreateComponent,
        HeaderToolbarDropdownComponent,
        ClientsComponent,
        ClientsManageComponent,
        SettingsUsersComponent,
        SettingsUsersManageComponent,
        SessionLoginComponent,
        SessionLogoutComponent,

    ],
    imports: [

        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        NgxDatatableModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgProgressModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true
        }),
        RouterModule.forRoot([

            {

                path: 'login',
                component: SessionLoginComponent

            }, {
                path: 'logout',
                component: SessionLogoutComponent,
                canActivate: [AuthGuard]

            }, {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'clients',
                component: ClientsComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'clients/create',
                component: ClientsManageComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'clients/:clientId',
                component: ClientsManageComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'cakes',
                component: CakesComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'cakes/create',
                component: CakesManageComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'cakes/:cakeId',
                component: CakesManageComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'settings',
                component: SettingsComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'settings/users',
                component: SettingsUsersComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'settings/users/create',
                component: SettingsUsersManageComponent,
                canActivate: [AuthGuard]

            }, {

                path: 'settings/users/:userId',
                component: SettingsUsersManageComponent,
                canActivate: [AuthGuard]

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: '/dashboard'

            }

        ], {

            onSameUrlNavigation: 'reload'

        })

    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NgProgressInterceptor,
            multi: true
        },
        AuthGuard,
        SessionService,
        CakesService,
        UsersService
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule {
}
