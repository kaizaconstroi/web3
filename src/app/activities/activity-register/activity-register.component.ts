import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { Activity } from '../../core/model';
import { ActivityService } from '../activity.service';
import { AuthService } from '../../security/auth.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-activity-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DatePickerModule,
    SelectModule
  ],
  templateUrl: './activity-register.component.html',
  styleUrl: './activity-register.component.css'
})
export class ActivityRegisterComponent {

  types = [
    { label: 'Caminhada', value: 'CAMINHADA' },
    { label: 'Ciclismo', value: 'CICLISMO' },
    { label: 'Corrida', value: 'CORRIDA' },
    { label: 'Natação', value: 'NATACAO' }
  ]; 

  activity!: Activity;

   constructor(
    private activityService: ActivityService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService
  ){
    this.activity = new Activity(this.auth.jwtPayload?.user_id);
  }

  save(activityForm: NgForm) {
    this.activityService.add(this.activity)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Atividade adicionada com sucesso!' });
        activityForm.reset();
        this.activity = new Activity(this.auth.jwtPayload?.user_id);
      })
      .catch(error => this.errorHandler.handle(error));
  }



}