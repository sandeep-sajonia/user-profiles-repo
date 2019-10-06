import { Component, OnInit } from '@angular/core';
import { UpRestService } from '../up-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userProfile:any;

  constructor(public rest:UpRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getUser(this.route.snapshot.params['userId']).subscribe((data: {}) => {
      console.log(data);
      this.userProfile = data;
    });
  }

}
