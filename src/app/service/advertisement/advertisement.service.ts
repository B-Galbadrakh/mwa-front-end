import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private advertisementUrl =
    'https://mwa-project-2020-b.herokuapp.com/api/advertisement';

  constructor(private http: HttpClient) {}

  register(data) {
    return this.http
      .post(this.advertisementUrl, data)
      .pipe(catchError(this.handleError));
  }

  getAdvertisement(country, years) {
    return this.http
      .get(this.advertisementUrl + '/' + country + '/' + years)
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
