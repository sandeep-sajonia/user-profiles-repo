import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../framework/services/framework-config.service';
import { MenuService } from '../framework/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService, private menuService: MenuService) {
    let config:FrameworkConfigSettings = {
      showLanguageSelector: true,
      showStatusBar: true,
      showUserControls: true,
      showStatusBarBreakPoint: 800
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;
    


  }
}
