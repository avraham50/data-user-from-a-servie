import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API =  'https://jsonplaceholder.typicode.com/posts/'
  private usersAPI = 'https://jsonplaceholder.typicode.com/users/#/posts'

  selectPost:Post

  constructor(private http:HttpClient,
    private userSrv:UserService) { }


    // getPostBySelectUser():Observable<Post[]>{
      
    // }

    // get(id:number):Observable<Post>{

    // }
}
