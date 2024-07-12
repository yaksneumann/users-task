import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, tasks: any[]}) {}
}
