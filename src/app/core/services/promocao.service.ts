import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  private apiURL: string = environment.apiURL

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.apiURL}/promocoes`)
  }
}
