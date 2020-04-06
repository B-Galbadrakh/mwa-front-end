import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppError } from 'src/app/common/App-Error';
import { catchError, tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/api/user/login';
  private registerUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}

  login(data) {
    return this.http
      .post(this.loginUrl, data)
      .pipe(catchError(this.handleError));
  }

  register(data) {
    return this.http
      .post(this.registerUrl, data)
      .pipe(catchError(this.handleError));
  }

  private handleError(error) {
    if (error instanceof HttpErrorResponse) {
      // Server side error
      console.log('Server side error', error);
    } else {
      // client side error
      console.log('Client side error', error);
    }
    return throwError(error);
  }
}
