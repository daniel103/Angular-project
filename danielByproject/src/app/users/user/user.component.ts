import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, users } from 'src/app/users';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
