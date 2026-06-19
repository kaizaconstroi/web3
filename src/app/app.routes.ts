import { Routes } from '@angular/router';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { ActivityRegisterComponent } from './activities/activity-register/activity-register.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

export const routes: Routes = [
  { path: 'activities', component: ActivitiesListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'activities/:id', component: ActivityRegisterComponent },
  { path: 'activities', component: ActivitiesListComponent },
  { path: 'activities/new', component: ActivityRegisterComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'activities/:id', component: ActivityRegisterComponent },
  { path: 'activities', component: ActivitiesListComponent },
  { path: 'activities/new', component: ActivityRegisterComponent },
  { path: 'users/users-register/new', component: UserRegisterComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'core/page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found'} // importante que seja a última rota

];

