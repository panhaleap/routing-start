import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          // 'server' is match with the object of resolve: {{ server: ServerResolver}} in app-routing.modules.ts
          this.server = data['server'];
        }
      );

    // const id = +this.route.snapshot.params['id']; // + is used for convert string to number

    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer( Number(params.id));
    //     }
    //   );
  }

  onEdit() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); // actually we wrtie  this.router.navigate([ '/servers', this.server.id,'edit']);
                                                              // but we already in the /servers path so we write this, it's enough
                                                              // tslint:disable-next-line: max-line-length
                                                              // with this.route, angular will know with route we want to navigate relatively.
                                                              // tslint:disable-next-line: max-line-length
                                                              // queryParamsHandling: 'preserve' is keep the URL of some queryParam the same if it their position is not change by the destiny route
                                                              // tslint:disable-next-line: max-line-length
                                                              // Example: current URL something/1/currentRoute/ss and the destiny URL will be something/nextRoute so destiny URL will be 
                                                              // something/1/nextRoute/ss
  }

}
