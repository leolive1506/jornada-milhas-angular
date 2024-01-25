import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup
  constructor(
    private dialog: MatDialog,
  ) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(''),
      destino: new FormControl(''),
      tipo: new FormControl('economica'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0)
    })
  }

  getFormControl(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl ${nome} not found`)
    }
    return control as FormControl
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }

  alterarTipo(tipo: 'economica' | 'executiva') {
    this.formBusca.patchValue({
      tipo
    })
  }

  getDescricaoPassageiros(): string {
    let descricao = ''
    const total = {
      adulto: this.formBusca.get('adultos')?.value,
      criaca: this.formBusca.get('criancas')?.value,
      bebe: this.formBusca.get('bebes')?.value
    }

    const keys = Object.keys(total)
    keys.forEach(key => {
      if (total[key]) {
        const concat = descricao ? ', ' : ''
        const label = total[key] > 1 ? `${key}s` : key

        descricao += `${concat} ${total[key]} ${label}`
      }
    })

    return descricao
  }

  getTipoText() {
    return this.getFormControl('tipo').value === 'economica' ? 'Econômica' : 'Executiva'
  }
}
