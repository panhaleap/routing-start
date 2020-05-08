import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // this id is get from app.module {path: 'users/:id/:name', component: UserComponent}
      name: this.route.snapshot.params['name'] // this id is get from app.module {path: 'users/:id/:name', component: UserComponent}
    };

    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
      );
    }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe(); // we unsubscribe this becasue when we close component,
                                          // only component is destroyed but subscribe not
  }
}
