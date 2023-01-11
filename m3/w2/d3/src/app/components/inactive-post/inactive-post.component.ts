import { Component, Input, OnInit, Output, DoCheck } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss'],
})
export class InactivePostComponent implements OnInit, DoCheck {
  posts: Post[] = [];
  constructor(private postServ: PostService) {}

  ngOnInit(): void {
    this.posts = this.postServ.getFilterPosts(false)
  }
  ngDoCheck(): void {
    this.posts = this.postServ.getFilterPosts(false)

}

  /*
  ngOnInit(): void {
    this.postServ.getFilterPosts(false).then((data) => (this.posts = data));
  }
  */


}
