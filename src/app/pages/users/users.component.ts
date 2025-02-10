import { Component, inject, OnInit } from '@angular/core';
import { UsersDataSource } from './users.datasource'
import { CdkTableModule } from '@angular/cdk/table';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  dataSource = new UsersDataSource();
  columns: string[] = ['id', 'avatar', 'name', 'email'];
  usersService = inject(UsersService);
  constructor() {}

  ngOnInit (): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.dataSource.init(users);
      });
  }
}
