import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUserService {
  cadastroForm: FormGroup
  constructor() {}

  getCadastroForm(): FormGroup {
    return this.cadastroForm
  }

  setCadastroForm(form: FormGroup) {
    this.cadastroForm = form
  }
}
