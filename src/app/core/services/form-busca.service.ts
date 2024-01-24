import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup
  constructor() {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(''),
      destino: new FormControl('')
    })
  }

  getFormControl(nome: string): FormControl {
    const control = this.formBusca.get('origem');
    if (!control) {
      throw new Error(`FormControl ${nome} not found`)
    }
    return control as FormControl
  }
}
