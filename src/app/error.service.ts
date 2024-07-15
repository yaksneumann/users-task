import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorSubject = new Subject<string | null>();
  errors$ = this.errorSubject.asObservable();

  showError(message: string) {
    this.errorSubject.next(message);
    console.error('Error:', message);
  }

  clearError() {
    this.errorSubject.next(null);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ErrorService {
//   private errorSubject = new BehaviorSubject<string | null>(null);
//   errors$ = this.errorSubject.asObservable();

//   showError(message: string) {
//     this.errorSubject.next(message);
//     console.error('Error:', message);
//   }

//   clearError() {
//     this.errorSubject.next(null);
//   }
// }