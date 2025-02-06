import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

export class UsersDataSource extends DataSource<any> {
  private usersSubject = new BehaviorSubject<any[]>([]);
  private originalData: any[] = [];

  connect(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }

  disconnect() {
    this.usersSubject.complete();
  }

  init (users: any[]) {
    this.originalData = this.usersSubject.value;
    this.usersSubject.next(users);
  }
}
