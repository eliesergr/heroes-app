import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})

export class LayoutPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  public sidebarItems = [
    { label: 'List',icon: 'label', url: './list'},
    { label: 'New',icon: 'add', url: './new-hero'},
    { label: 'Search',icon: 'search', url: './search'}
  ]

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

}
