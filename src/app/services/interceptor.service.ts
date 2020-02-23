import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authServicce: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('intercepting.....')
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.authServicce.getToken()}`
      }
    }) 

    return next.handle(request)
  }
}
