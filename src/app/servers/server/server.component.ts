import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    const id = +this.route.snapshot.params['id']; // + is used for convert string to number

    this.server = this.serversService.getServer(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer( Number(params.id));
        }
      );
  }

  onEdit() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['edit'], {relativeTo: this.route}); // actually we wrtie  this.router.navigate([ '/servers', this.server.id,'edit']);
                                                              // but we already in the /servers path so we write this, it's enough
                                                              // tslint:disable-next-line: max-line-length
                                                              // with this.route, angular will know with route we want to navigate relatively.
  }

}
