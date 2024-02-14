import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUserService } from 'src/app/core/services/form-user.service';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidation } from '../form-validation';

@Component({
  selector: 'app-form-base-user',
  templateUrl: './form-base-user.component.html',
  styleUrls: ['./form-base-user.component.scss']
})
export class FormBaseUserComponent implements OnInit {
  form: FormGroup
  @Input() perfilComponent: boolean
  @Input() title = 'Crie sua conta'
  @Output() onSubmitForm = new EventEmitter<any>()
  @Output() onLogout = new EventEmitter<any>()


  constructor(private formService: FormUserService) {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      nascimento: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(3)]),
      genero: new FormControl('outro'),
      telefone: new FormControl('', Validators.required),
      estado: new FormControl<UnidadeFederativa|string>('', Validators.required),
      confirmarEmail: new FormControl('', [Validators.required, Validators.email, FormValidation.equalTo('email')]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(3), FormValidation.equalTo('senha')]),
      aceitarTermos: new FormControl('', Validators.requiredTrue),
    })
  }

  ngOnInit(): void {
    this.formService.setCadastroForm(this.form)
    this.form.get('confirmarEmail').valueChanges.subscribe(value => {
      console.log(this.form.get('confirmarEmail').errors)
    })

    if (this.perfilComponent) {
      this.form.get('aceitarTermos').setValidators(null)
    } else {
      this.form.get('aceitarTermos').setValidators([Validators.requiredTrue])
    }

    this.form.get('aceitarTermos').updateValueAndValidity()
  }



  getFormControl(nome: string): FormControl {
    const control = this.form.get(nome);
    if (!control) {
      throw new Error(`FormControl ${nome} not found`)
    }
    return control as FormControl
  }

  executar() {
    this.onSubmitForm.emit()
  }

  logout() {
    this.onLogout.emit()
  }
}
