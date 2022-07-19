import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.listUser();
  }

  listUser() {
    // subscribe thực hiện asynchronous
    this.userService.getUserList().subscribe(
      data => {
        this.users = data;
      }
    );
  }
}
