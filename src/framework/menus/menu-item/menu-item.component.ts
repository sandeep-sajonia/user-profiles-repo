import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/framework/services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
@Input() item = <MenuItem>null; //MenuItem;

  constructor() {  }

  ngOnInit() {
  }

}
