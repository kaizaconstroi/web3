import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { TooltipModule } from 'primeng/tooltip';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { AuthService } from './security/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
 imports: [
    RouterOutlet,
    ActivitiesListComponent,
    LoginFormComponent
  ],
  providers: [
    AuthService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ifitness-ui';

  activities = [
    { type: 'CORRIDA', activity_date: '27/05/2025', distance: 8.0, duration: 42, user: 'Fernando Duarte' },
    { type: 'CORRIDA', activity_date: '28/05/2025', distance: 8.0, duration: 43, user: 'Fernando Duarte' },
    { type: 'CAMINHADA', activity_date: '28/05/2025', distance: 5.0, duration: 55, user: 'Juliana Silva' }
  ];

}
