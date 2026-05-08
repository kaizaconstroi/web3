import { Routes } from '@angular/router';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';

export const routes: Routes = [
  { path: 'activities', component: ActivitiesListComponent },
  { path: 'login', component: LoginFormComponent }

];