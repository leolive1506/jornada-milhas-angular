import { PessoaUsuario } from './../../core/types/type';
import { Component } from '@angular/core';
import { FormUserService } from 'src/app/core/services/form-user.service';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private formService: FormUserService,
    private service: RegisterService
  ) {

  }

  cadastrar() {
    const form = this.formService.getCadastroForm();
    this.service.register(form.value as PessoaUsuario).subscribe({
      next: (response) => console.log(response),
      error: (response) => console.log(response)
    })
  }
}
