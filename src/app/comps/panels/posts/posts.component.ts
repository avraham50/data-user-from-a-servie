import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/post';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'panel-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList:Post[] = []
  
  constructor(public postSrv:PostService,
    private loc:LocationService) { }

  ngOnInit() {
    this.postSrv.getPostsBySelectedUser()
    .subscribe(d => this.postsList = d)
  }

  



}
