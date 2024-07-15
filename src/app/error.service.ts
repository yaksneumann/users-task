import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorSubject = new Subject<string>();
  errors$ = this.errorSubject.asObservable();

  showError(message: string) {
    this.errorSubject.next(message);
  }
}