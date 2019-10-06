import { Component, OnInit, Input } from '@angular/core';
import { UpRestService } from '../up-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() userData:any = { userId: 0, email: "string", firstName: "string", lastName: "string", displayName: "string", description: "string", department: "string", team: "string" };

  constructor(public rest:UpRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getUser(this.route.snapshot.params['userId']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
  }

  updateUser() {
    this.rest.updateUser(this.route.snapshot.params['userId'], this.userData).subscribe((result) => {
      this.router.navigate(['/user-details/'+ this.userData.userId]);
    }, (err) => {
      console.log(err);
    });
  }

}
