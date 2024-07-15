import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ApiService } from '../api.service';
import { ErrorService } from '../error.service';

// import { ErrorService } from '../error.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchNumber: number | null = null;
  searchResult: string = '';

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private errorService: ErrorService
  ) {}

  onValueChange(value: string) {
    this.searchNumber = value ? Number(value) : null;
  }

  onSearch() {
    console.log(this.searchNumber);
    if (this.searchNumber !== null)
      this.searchResult = `You searched for ${this.searchNumber}`;
    const userId = this.searchNumber as number;
    this.api.getTasksByUser(userId).subscribe({
      next: (data) => {
        const userTasks = data;
        this.dialog.open(ModalComponent, {
          data: { name: userId, tasks: userTasks },
        });
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.errorService.showError(error.message);
      },
    });
  }
}
