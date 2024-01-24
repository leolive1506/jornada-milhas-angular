import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipOption, MatChipSelectionChange } from '@angular/material/chips';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  form: FormGroup
  constructor(
    private formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuscaService.formBusca
  }

  alterarTipo(event: MatChipSelectionChange): void {
    if (event.selected) {
      this.formBuscaService.alterarTipo(event.source.value)
    }
  }
}

