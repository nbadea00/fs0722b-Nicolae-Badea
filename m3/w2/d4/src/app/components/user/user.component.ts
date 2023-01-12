import { Component, Input, OnInit, DoCheck  } from '@angular/core';
import { User } from 'src/app/interface/user';
import {ActivatedRoute} from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private url : ActivatedRoute, private userSrv : UsersService) { }
  user!: User[]
  ngOnInit(): void {
  }

  ngDoCheck(){
    this.user = this.userSrv.getUser(Number(this.url.snapshot.params['id']))
  }
}
