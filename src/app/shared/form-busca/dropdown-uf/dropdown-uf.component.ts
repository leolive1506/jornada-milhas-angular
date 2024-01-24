import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
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
  @Input() input: FormControl

  filteredOptions: Observable<UnidadeFederativa[]>
  unidadesFederativas: UnidadeFederativa[] = []

  constructor(
    private service: UnidadeFederativaService,
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe(list => {
      this.unidadesFederativas = list
    })

    this.filteredOptions = this.input.valueChanges.pipe(
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
