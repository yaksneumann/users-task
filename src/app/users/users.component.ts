import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatTableModule } from '@angular/material/table';

import { USERS } from '../data/users';
import { TASKS } from '../data/tasks';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {

  displayedColumns: string[] = [
    'name',
    'username',
    'email',
    'address',
    'phone',
    'website',
    'company'
  ];
  dataSource: MatTableDataSource<any>;

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(USERS);
  }

  onClickedUser(user: any) {
    console.log(user);
    const { id: userId } = user;
    const userTasks = TASKS.filter((task) => task.userId === userId);
    this.dialog.open(ModalComponent, {
      data: { name: user.name, tasks: userTasks },
    });
  }

  // @Input() id!: number;
  // @Input() name!: string;
  // @Output() selectedUser = new EventEmitter();

  // onSelectedUser(){
  //   this.selectedUser.emit(this.id);
  // }
}
