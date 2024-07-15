import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-display.component.html',
  styleUrl: './error-display.component.css'
})
export class ErrorDisplayComponent implements OnInit, OnDestroy {
  errorMessage: string | null = null;
  private errorSubscription: Subscription | null = null;

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.errorSubscription = this.errorService.errors$.subscribe(
      error => {
        this.errorMessage = error;
      }
    );
  }

  ngOnDestroy() {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }

  clearError() {
    this.errorService.clearError();
  }
}