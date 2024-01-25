import { Component, OnInit } from '@angular/core';
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
    // this.formBuscaService.formBusca.valueChanges.subscribe(console.log);
  }

  buscar() {
    console.log(this.formBuscaService.formBusca.value)
  }

  changeOrigemDestino() {
    const origem = this.formBuscaService.getFormControl('origem').value
    const destino = this.formBuscaService.getFormControl('destino').value

    this.formBuscaService.formBusca.patchValue({
      origem: destino,
      destino: origem
    })
  }
}
