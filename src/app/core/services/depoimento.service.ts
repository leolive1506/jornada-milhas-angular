import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depoimento } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {
  private readonly apiURL = `${environment.apiURL}/depoimentos`

  constructor(private http: HttpClient) { }

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(this.apiURL)
  }
}
