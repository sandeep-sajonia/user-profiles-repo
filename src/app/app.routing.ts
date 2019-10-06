import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const appRoutes: Routes = [
  {    path: 'users', component: UserComponent,  data: { title: 'User List' }  },
  {    path: 'user-details/:userId', component: UserDetailComponent,  data: { title: 'User Details' }  },
  {    path: 'user-add', component: UserAddComponent, data: { title: 'User Add' }  },
  {    path: 'user-edit/:userId', component: UserEditComponent, data: { title: 'User Edit' }  },
  {    path: '', redirectTo: '/users',  pathMatch: 'full'  }
]; 