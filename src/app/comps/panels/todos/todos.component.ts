import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'panel-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  todosList:Todo[] = [];

  constructor(public todoSer:TodoService) { }

  ngOnInit() {
    this.todoSer.getTodosBySelectedUser()
    .subscribe(d => this.todosList = d)
  }

  

  }


