import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private API =  'https://jsonplaceholder.typicode.com/todos/'

  selectTodo:Todo
  UserId:number

  constructor(public http:HttpClient,
   public userSrv:UserService) { }


    getTodosBySelectedUser():Observable<Todo[]>{
      return this.http
        .get<Todo[]>(this.API)
    }
   

    getId(){
      this.UserId = this.userSrv.selectAUser.id
      console.log('UserId =',this.UserId)
     }
}
