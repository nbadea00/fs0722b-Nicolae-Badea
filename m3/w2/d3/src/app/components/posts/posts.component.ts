import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(public postSrv:PostService) { }

  ngOnInit(): void {
  }

  @Input() posts: Post[] = [];

}
