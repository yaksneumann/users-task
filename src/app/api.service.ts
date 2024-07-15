import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getTasksByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/todos?userId=${userId}`);
  }

  getExchangeRate(): Observable<any> {
    const apiUrl = 'https://www.alphavantage.co/query';
    const apiKey = 'TEWUOLIGHSTM4MVM';

    //const url = `${apiUrl}?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=${apiKey}`;
   // const url = `${this.apiUrl}?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=${toCurrency}&apikey=${this.apiKey}`;
  //  return this.http.get<any>(url);
  return timer(0, 60000).pipe(
    switchMap(() => this.http.get<any>(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo`))
  );
  }
}