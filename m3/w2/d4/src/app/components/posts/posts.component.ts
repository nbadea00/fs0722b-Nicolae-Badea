import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

  @Input() post!: Post;
  @Input() param!: boolean;

}
