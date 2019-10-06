import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/framework/services/menu.service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  
  constructor(private menuServie: MenuService) { }

  ngOnInit() {
    
  }

}
