import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuario } from 'src/app/core/types/type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private userService: UserService,
    private router: Router,

  ) {}

  user$: Observable<PessoaUsuario> = this.userService.user

  logout() {
    this.userService.logout()
    this.router.navigate(['/login'])
  }
}
