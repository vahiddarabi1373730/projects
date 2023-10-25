import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllServicesService } from './all-services.service';

@Injectable()
export class checkLoginInterceptor implements HttpInterceptor {
  constructor(private allServicesService: AllServicesService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clone = request.clone({
      withCredentials: true,
    });
    return next.handle(clone);
  }
}
