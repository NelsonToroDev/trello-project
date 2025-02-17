import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { TokenService } from './token.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  apiUrl = environment.API_URL;
  tokenService = inject(TokenService);
  constructor() { }

  getUsers () {
    const token = this.tokenService.getToken();
    return this.http.get<User[]>(`${this.apiUrl}/api/v1/users`, {
      headers: {
      Authorization: `Bearer ${token}`
      }
    }).pipe(
      map(users => {
      // Modify the list of retrieved users here
      return users.map(user => {
        // Example modification: add a new property to each user
        return {
        ...user,
          avatar: `https://avatar.iran.liara.run/username?username=${user.name}`
        };
      });
      })
    );
  }
}
