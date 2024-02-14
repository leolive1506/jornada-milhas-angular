import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { PessoaUsuario } from '../types/type';
import { jwtDecode } from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = environment.apiURL
  private userSubjct = new BehaviorSubject<PessoaUsuario|null>(null)
  private _user: PessoaUsuario = null
  public token: string

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
      this.token = this.tokenService.token;
    }
  }

  get user() {
    return this.userSubjct.asObservable()
  }

  login(token: string) {
    this.tokenService.token = token
    this.decodeJWT()
  }

  logout() {
    this.tokenService.remove()
    this.userSubjct.next(null)
  }

  isLogged() {
    return this.tokenService.hasToken()
  }

  decodeJWT() {
    const token = this.tokenService.token
    const user = jwtDecode(token) as PessoaUsuario
    this.userSubjct.next(user)
  }

  register(userData: PessoaUsuario): Observable<PessoaUsuario> {
    return this.http.post<PessoaUsuario>(`${this.apiUrl}/auth/cadastro`, userData)
  }

  details(): Observable<PessoaUsuario> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })

    return this.http.get<PessoaUsuario>(`${this.apiUrl}/auth/perfil`, { headers })
  }

  update(data: PessoaUsuario): Observable<PessoaUsuario> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })

    return this.http.patch<PessoaUsuario>(`${this.apiUrl}/auth/perfil`, data, { headers })
  }
}
