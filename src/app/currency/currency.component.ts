import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent implements OnInit {
  exchangeRate$!: Observable<any>;
  previousRate: number | null = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.exchangeRate$ = this.api.getExchangeRate().pipe(
      map(data => {
        const currentRate = parseFloat(data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        const trend = this.previousRate !== null ? (currentRate > this.previousRate ? 'up' : 'down') : 'neutral';
        this.previousRate = currentRate;
        return { ...data['Realtime Currency Exchange Rate'], currentRate, trend };
      })
    );
    
  }
  
}
