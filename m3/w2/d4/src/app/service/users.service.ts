import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}

  users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  async callFetch() {
    //function asincrona per salvare in locale la lista di post
    let a = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => (this.users = data));
  }

  getUser(id:number): User[]{
    console.log(id)
    return this.users.filter((el: User) => el.id == id)
  }
}
