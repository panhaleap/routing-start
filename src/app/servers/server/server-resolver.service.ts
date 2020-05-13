import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

// Resolver is a service which allow us to run some code before a route is rendered.
// It always renders the component in the end but it will do some pre-loading.
// It will fetch some data and the componet will then need those data later on.
@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}

    // This method will be called by angular when the route that called it is loaded
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        // tslint:disable-next-line: max-line-length
        // This what give back to the angular and data will be stored in object of resolve: {{ server: ServerResolver}} in app-routing.modules.ts
        return this.serversService.getServer(+route.params.id);
    }
}
