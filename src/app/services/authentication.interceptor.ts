import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,private toastr: ToastrService) {}

  // gelen response nesnelerını kontrol eder. 401 olup olmadıgını kontrol eder
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err);
      if (err.status === 401) {
        this.authService.logout();
        this.toastr.error(err.error.message);
        // location.reload(true);
      }
      const error = err.error && err.error.message || err.message || err.statusText;
      if (!(err.status === 401 && err.error.refresh)) {
        this.toastr.error(error);
      }
      return throwError(error);
    }))
  }
}