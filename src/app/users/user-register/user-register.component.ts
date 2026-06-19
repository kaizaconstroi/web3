import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { User } from '../../core/model';
import { UserService } from '../user.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { MessageComponent } from '../../shared/message/message.component';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-user-register',
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    SelectModule,
    DatePicker,
    RouterModule,
    MessageComponent
  ],
   providers:[
    Title
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {

  user = new User();

  genders = [
    { label: 'Masculino', value: 'MASCULINO' },
    { label: 'Feminino', value: 'FEMININO' },
    { label: 'Outro', value: 'OUTRO' },
    { label: 'Prefiro não dizer', value: 'PREFIRO_NAO_DIZER' }
  ];

  constructor(
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private userService: UserService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id !== 'new') {
      // implementar carregamento de usuário se houver edição
    }
    this.title.setTitle('Cadastro de Usuário');
  }

  save(userForm: NgForm) {
    this.userService.add(this.user)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Usuário adicionado com sucesso!' });
        this.router.navigate(['/login']);
      })
      .catch((error: any) => this.errorHandler.handle(error));
  }

}
  