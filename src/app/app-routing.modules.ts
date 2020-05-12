import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
    {path: '' , component: HomeComponent}, // localhost:4200/home
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}, // localhost:4200/users
    ]}, // localhost:4200/users

    // this meant, until canActivate method in auth-quard.service class return true then we can access to path: 'servers'
    {path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent}, // localhost:4200/servers
      {path: ':id/edit', component: EditServerComponent} // localhost:4200/servers
    ]}, // localhost:4200/servers

    {path: 'not-found', component: PageNotFoundComponent},
    // tslint:disable-next-line: max-line-length
    {path: '**', redirectTo: '/not-found'} // ** is wildcard which catchs all routes we don't know. Make sure this define in the last of Routes.
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
