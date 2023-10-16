import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('userToken') !== null) {
      return true; // User is authenticated, allow access
    } else {
      // User is not authenticated, navigate to a login page or another URL
      // Example: Redirect to the login page
      this.router.navigate(['/login']); // Replace '/login' with the URL you want to redirect to
      return false; // Prevent access to the current route
    }
  }
}
