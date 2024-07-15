import { Component, OnInit, EventEmitter, Input, Output, input, output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatTableModule } from '@angular/material/table';

import { ApiService } from '../api.service';
import { USERS } from '../data/users';
import { TASKS } from '../data/tasks';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {

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
  users: any;

  constructor(private dialog: MatDialog, private api: ApiService) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.api.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
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
