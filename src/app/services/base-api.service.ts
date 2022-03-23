import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BaseApiService {

  constructor() { }

  protected handleError(error: any): Observable<any[]>
  {
    const applicationError = error.headers.get('Application-Error');
    const bodyContentError = error;
    let errorContent;
    if(applicationError) {
      return observableThrowError(applicationError)
    }
    else {
      if(bodyContentError) {
        if (
          bodyContentError.error &&
          bodyContentError.error.Errors &&
          bodyContentError.error.Errors.length
        ) {
          let messages;
          messages = bodyContentError.error.Errors.map((err: any) => {
            return ' ' + err.Description
          });
          errorContent = {
            statusCode: bodyContentError.status,
            message: messages.toString()
          };
        }
        else if (
          bodyContentError.status === 401 &&
          bodyContentError.error &&
          bodyContentError.error.status &&
          !bodyContentError.error.verified &&
          bodyContentError.error.status === 'ACCESSTOKEN_EXPIRED'
        ) {
          errorContent = {
            statusCode: bodyContentError.status,
            message: 'Session timed out'
          };
        } else {
          errorContent = {
            statusCode: bodyContentError.status,
            message: bodyContentError.error ? bodyContentError.error : '',
          };
        }
    }
      return observableThrowError(errorContent);
    }
  }


}
