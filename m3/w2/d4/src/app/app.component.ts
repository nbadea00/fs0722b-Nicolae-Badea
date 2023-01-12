import { Component } from '@angular/core';
import { PostService } from './service/post.service';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-first-project';
  constructor(private postServ:PostService, private userServ : UsersService){
    this.postServ.callFetch();
    this.userServ.callFetch();
  }
}
