import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AllServicesService } from './all-services.service';
import { Injectable } from '@angular/core';
@Injectable()
export class CustomGuard implements CanActivate {
  constructor(
    private allServicesService: AllServicesService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.allServicesService.isLogin$.getValue()) {
      this.router.navigate(['signIn']);
    }
    return this.allServicesService.isLogin$.getValue();
  }
}
