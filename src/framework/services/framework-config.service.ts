import { Injectable } from '@angular/core';

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBarBreakPoint?: number
}

@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakPoint = 0;
  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings);
   }
}
