import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'user-optsyot',
  templateUrl: './user-optsyot.component.html',
  styleUrls: ['./user-optsyot.component.css']
})
export class UserOptsyotComponent implements OnInit {


  constructor(public userSrv:UserService,private loc:LocationService) { }

  ngOnInit() {
  }

  moveToPage(page:string){
    this.loc.location = page
  }
  
  

}
