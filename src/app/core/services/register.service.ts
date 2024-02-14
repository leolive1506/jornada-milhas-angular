import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PessoaUsuario } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly apiUrl = environment.apiURL
  constructor(private http: HttpClient) { }

  register(userData: PessoaUsuario): Observable<PessoaUsuario> {
    return this.http.post<PessoaUsuario>(`${this.apiUrl}/auth/cadastro`, userData)
  }
}
