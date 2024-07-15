import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  let randomNumber: number;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`randomNumber: ${randomNumber}`);

  const modifiedReq = req.clone({
    setHeaders: {
      'Custom-Header': randomNumber.toString()
    }
  });
  if (randomNumber > 15) {
    return throwError(() => new Error('random number to high!'))
  }
  

  // Handle the modified request and catch any errors
  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMsg = `Error: ${error.error.message}`;
      } else {
        // Server-side error
        errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
      }
      console.error(errorMsg);
      // You can also implement a more sophisticated error handling here,
      // such as showing a toast notification or updating an error state
      return throwError(() => new Error(errorMsg));
    })
  );
};