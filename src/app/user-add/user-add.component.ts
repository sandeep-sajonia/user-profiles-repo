import { Component, OnInit, Input } from '@angular/core';
import { UpRestService } from '../up-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Input() userProfile = { 
    userId:0, 
    email: '', 
    firstName: '', 
    lastName: '', 
    displayName: '', 
    description: '',
    department: '',
    team: ''
  };

  constructor(public rest:UpRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.rest.addUser(this.userProfile).subscribe((result) => {
      this.router.navigate(['/users/']);
    }, (err) => {
      console.log(err);
    });
  }

}
