import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() { }

  /*
  posts: Post[] = [
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
  ];
  */

  getFilterPosts(param: boolean): Post[] {
    return this.posts.filter((element: Post) => element.active == param)
  }

  b = this.getPost()    //prende il metodo getPost() della classe

  posts: Post[] = [];

  async getPost() {        //function asincrona per salvare in locale la lista di post
    let post: Post[] = []    //variabile per recuperare i dati del fetch
    let a = await fetch("assets/db.json").then((response) => response.json()).then((data) => post = data)
    this.posts = post;   //passaggio dei dati della variabile post alla proprietà posts della classe

  }
  updatePost(id: number) {
    this.posts.forEach((post) => { if (post.id == id) { (post.active) ? post.active = false : post.active = true } });

  }
  /*
  async getFilterPosts(param:boolean): Promise<Post[]> {
    return await fetch("assets/db.json").then((response)=> response.json()).then((data) => {return data.filter((element:Post) => element.active === param)});
  }
  */
}
