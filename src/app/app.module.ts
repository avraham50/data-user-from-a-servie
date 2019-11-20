import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentComponent } from './comps/items/comment/comment.component';
import { PostComponent } from './comps/items/post/post.component';
import { TodoComponent } from './comps/items/todo/todo.component';

import { UserComponent } from './comps/items/user/user.component';
import { UserOptsyotComponent } from './comps/user-optsyot/user-optsyot.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comps/panels/comments/comments.component';
import { PostsComponent } from './comps/panels/posts/posts.component';
import { TodosComponent } from './comps/panels/todos/todos.component';
import { UsersComponent } from './comps/panels/users/users.component';
// import { User } from './model/user';



@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    TodoComponent,
   
    UserComponent,
    UserOptsyotComponent,
    CommentsComponent,
    PostsComponent,
    TodosComponent,
    UsersComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
