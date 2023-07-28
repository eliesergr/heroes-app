import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanMatch, CanActivate, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap, of, pipe, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

    private checkAuthStatus(): boolean | Observable<boolean> {

      return this.authService.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('isAuthenticated: ', isAuthenticated )),
        tap( isAuthenticated => {
          if( isAuthenticated) {
            this.router.navigate(['./'])
          }
        }),
        map( isAuthenticated => !isAuthenticated)
      )
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

      // console.log('canMatch');
      // console.log(route, segments);

      return this.checkAuthStatus();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

      // console.log('canActivate');
      // console.log(route, state);

      return this.checkAuthStatus();

    }

}
