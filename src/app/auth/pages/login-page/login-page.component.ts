import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  onLogin(): void {
    this.authService.login('eliesergr123@gmail.com', 'asddffd45.sfdgd5.sdf543s')
    .subscribe( user => {
      this.router.navigate(['/']);
    });
  }
}
