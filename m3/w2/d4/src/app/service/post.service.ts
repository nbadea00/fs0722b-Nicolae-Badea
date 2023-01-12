import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  posts: Post[] = [];

  getPosts(): Post[] {
    return this.posts;
  }

  async callFetch() {
    //function asincrona per salvare in locale la lista di post
    let a = await fetch('assets/db.json')
      .then((response) => response.json())
      .then((data) => (this.posts = data));
  }

  updatePost(id: number) {
    this.posts.forEach((post) => {
      if (post.id == id) {
        post.active = !post.active;
      }
    });
  }
}
