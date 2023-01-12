import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss'],
})
export class InactivePostComponent implements OnInit {
  posts: Post[] = [];
  constructor(public postServ: PostService) {}

  ngOnInit(): void {
    this.posts = this.postServ.getPosts()
  }
}
