import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    {
        "id":1,
        "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active":true
    },
    {
        "id":2,
        "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active":true
    },
    {
        "id":3,
        "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active":true
    },
    {
        "id":4,
        "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active":false
    },
    {
        "id":5,
        "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active":false
    }
  ]
  ;
  constructor() {}

  getPosts():Post[] {
    let posts:Post[] = [];

    fetch('assets/db.json')
      .then((response) => response.json())
      .then((data) => (posts = data));

    return posts;
  }

  getPostActive(): Post[] {
    let postAttivi: Post[] = [];
    this.posts .forEach((post) => {
      if (post.active) {
        postAttivi.push(post);
      }
    });
    return postAttivi;
  }

  getPostDisattivi(): Post[] {
    let postDisattivi: Post[] = [];
    this.posts.forEach((post) => {
      if (!post.active) {
        postDisattivi.push(post);
      }
    });
    return postDisattivi;
  }
}
