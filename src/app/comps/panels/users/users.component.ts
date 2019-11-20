import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { LocationService } from 'src/app/services/location.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'panel-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  users:User[] = []
  constructor(public userSrv:UserService, private loc:LocationService,public ps:PostService) { }

  ngOnInit() {
    this.userSrv.getUsers()
    .subscribe(data => this.users = data)
  }

  selectUser(u:User) {
    this.userSrv.selectAUser = u
    this.loc.location = "user-optsyot"
    this.ps.getId();
  } 

}
