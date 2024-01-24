import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit {
  constructor(
    public formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    this.formBuscaService.formBusca.controls['origem'];
    this.formBuscaService.formBusca.valueChanges.subscribe(console.log);
  }

}
