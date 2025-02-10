import { DataSource } from '@angular/cdk/collections';
import { User } from '@models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class UsersDataSource extends DataSource<User> {
  private usersSubject = new BehaviorSubject<User[]>([]);
  private originalData: User[] = [];

  connect(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  disconnect() {
    this.usersSubject.complete();
  }

  init (users: User[]) {
    this.originalData = this.usersSubject.value;
    this.usersSubject.next(users);
  }
}
