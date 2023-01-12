import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
users!: User[]

  constructor( private usersSrv: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersSrv.getUsers()
    console.log(this.users)
  }



}
