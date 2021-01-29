import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [{
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      emailAddress: 'johndoe@example.com'
    }, {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 24,
      emailAddress: 'janedoe@example.com'
    }, {
      id: 3,
      firstName: 'Johny',
      lastName: 'Doe',
      age: 10,
      emailAddress: 'johnydoe@example.com'
    }];
  }
}
