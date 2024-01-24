import { UnidadeFederativaService } from './../../core/services/unidade-federativa.service';
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao, UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  promocoes: Promocao[]
  states: UnidadeFederativa[]
  constructor(
    private service: PromocaoService,
    private unidadeFederativaService: UnidadeFederativaService
  ) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe(lista => {
      this.promocoes = lista
    })
    this.unidadeFederativaService.listar().subscribe(lista => {
      this.states = lista
      console.log(lista)
    })
  }
}
