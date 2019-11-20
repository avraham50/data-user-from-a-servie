import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API =  'https://jsonplaceholder.typicode.com/posts/'
  

  selectPost:Post
  UserId:number
  
  constructor(private http:HttpClient,
    private userSrv:UserService) { }

  // print(){
  //   console.log(this.http.get<User[]>(this.API))
  // }


  getPostsBySelectedUser():Observable<Post[]>{
    return this.http
      .get<Post[]>(this.API)
  }

  get(id:number):Observable<Post>{
    return this.http.get<Post>(this.API+id)
  }
getId(){
 this.UserId = this.userSrv.selectAUser.id
 console.log('UserId =',this.UserId)
}
 
}
