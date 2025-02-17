import { Component, inject, OnInit } from '@angular/core';
import { UsersDataSource } from './users.datasource'
import { CdkTableModule } from '@angular/cdk/table';
import { UsersService } from '@services/users.service';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user.model';

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
  authService = inject(AuthService);
  user: User | null = null;
  constructor() {}

  ngOnInit (): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.dataSource.init(users);
      });
    
    this.authService.user$.subscribe((user) => this.user = user);
  }
}
