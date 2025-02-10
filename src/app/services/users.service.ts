import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { TokenService } from './token.service';

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
    });
  }
}
