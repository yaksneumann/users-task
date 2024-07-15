import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  // Add custom header to every request
  const modifiedReq = req.clone({
    setHeaders: {
      'Custom-Header': 'Your-Custom-Value'
    }
  });

  // Handle the modified request and catch any errors
  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMsg = `Error: ${error.error.message}`;
      } else {
        // Server-side error
        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
      }
      console.error(errorMsg);
      // You can also implement a more sophisticated error handling here,
      // such as showing a toast notification or updating an error state
      return throwError(() => new Error(errorMsg));
    })
  );
};