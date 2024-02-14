import { PessoaUsuario } from './../../core/types/type';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormUserService } from 'src/app/core/services/form-user.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private formService: FormUserService,
    private userService: UserService,
    private router: Router
  ) {

  }

  cadastrar() {
    const form = this.formService.getCadastroForm();
    this.userService.register(form.value as PessoaUsuario).subscribe({
      next: (response) => this.router.navigate(['/login']),
      error: (response) => console.log(response)
    })
  }
}
