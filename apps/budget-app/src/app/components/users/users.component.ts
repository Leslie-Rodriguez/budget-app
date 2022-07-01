import { Component } from '@angular/core';

@Component({
  selector: 'budget-app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  pageName = 'User';
  edit_path = '/dashboard/user/new'
}
