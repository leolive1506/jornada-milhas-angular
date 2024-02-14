import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormUserService } from 'src/app/core/services/form-user.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuario } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: PessoaUsuario
  form: FormGroup

  constructor(
    private userService: UserService,
    private formService: FormUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.details().subscribe(user => {
      this.user = user
      this.loadForm()
    })

  }

  loadForm() {
    this.form = this.formService.getCadastroForm()
    this.form?.patchValue({
      nome: this.user.nome,
      nascimento: this.user.nascimento,
      cpf: this.user.cpf,
      telefone: this.user.telefone,
      email: this.user.email,
      senha: this.user.senha,
      genero: this.user.genero,
      cidade: this.user.cidade,
      estado: this.user.estado
    })
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['/'])
  }

  update() {
    const updatedData = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    }

    this.userService.update(updatedData).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (error) => console.log(error)
    })
  }
}
