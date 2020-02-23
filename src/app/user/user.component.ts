import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  id;
  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.userService.getUser(this.id).subscribe(data => {
      this.user = data['data']
    })
  }

  ngOnInit() {

  }

}
