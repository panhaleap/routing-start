import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // this id is get from app.module {path: 'users/:id/:name', component: UserComponent}
      name: this.route.snapshot.params['name'] // this id is get from app.module {path: 'users/:id/:name', component: UserComponent}
    }
  }

}
