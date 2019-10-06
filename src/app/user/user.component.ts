import { Component, OnInit } from '@angular/core';
import { UpRestService } from '../up-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   users:any = [];

  constructor(public rest:UpRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }

  add() {
    this.router.navigate(['/user-add']);
  }

  delete(id) {
    this.rest.deleteUser(id)
      .subscribe(res => {
          this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
