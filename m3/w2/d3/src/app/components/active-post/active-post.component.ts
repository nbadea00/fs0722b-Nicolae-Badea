import { Component, OnInit, DoCheck, SimpleChange} from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss'],
})
export class ActivePostComponent implements OnInit, DoCheck {
  posts: Post[] = [];
  constructor(private postServ: PostService) {}

  ngOnInit(): void {
    this.posts = this.postServ.getFilterPosts(true)

  }
  ngDoCheck(): void {
    this.posts = this.postServ.getFilterPosts(true)

}


  /*
  ngOnInit(): void {
    this.postServ.getFilterPosts(true).then((data) => (this.posts = data));
  }
  */
}
