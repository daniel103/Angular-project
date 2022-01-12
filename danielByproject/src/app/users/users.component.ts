import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User , users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users = users
constructor(
  private route: ActivatedRoute
) { }

user: User | undefined

ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const userIdFromRoute = Number(routeParams.get('userId'));

  // Find the product that correspond with the id provided in route.
  this.user = users.find(user => user.id === userIdFromRoute);
}

}
