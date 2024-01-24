import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroupDirective } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string
  @Input() iconPrefix: string
  @Input() name: string

  filteredOptions: Observable<UnidadeFederativa[]>
  unidadesFederativas: UnidadeFederativa[] = []

  constructor(
    private service: UnidadeFederativaService,
    public form: FormBuscaService
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe(list => {
      this.unidadesFederativas = list
    })

    this.filteredOptions = this.form.formBusca.get(this.name).valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();

    return this.unidadesFederativas.filter(
      option => option.nome.toLowerCase().includes(filterValue)
    );
  }
}
