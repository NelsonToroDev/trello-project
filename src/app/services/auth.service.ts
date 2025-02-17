import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '@environments/environment';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { ResponseLogin } from '@models/auth.model';
import { User } from '@models/user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private tokenService = inject(TokenService);
  apiUrl = environment.API_URL;
  user$ = new BehaviorSubject<User | null>(null);

  constructor() { }

  login (email: string, password: string) {
    return this.http.post<ResponseLogin>(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password
    })
      .pipe(
        // Pipe will be executed after the request completed and before call to subscribers
        tap(response => this.tokenService.saveToken(response.access_token))
      );
  }

  register (name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`, {
      name,
      email,
      password
    });
  }

  registerAndLogin (name: string, email: string, password: string) {
    return this.register(name, email, password)
      .pipe(
        switchMap(() => this.login(email, password))
      );
  }

  isAvailable (email: string) {
    return this.http.post<{ isAvailable: boolean }>(`${this.apiUrl}/api/v1/auth/is-available`, {
      email,
    });
  }

  recovery (email: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/recovery`, {
      email
    });
  }

  changePassword (token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/change-password`, {
      token,
      newPassword
    });
  }

  logout () {
    this.tokenService.removeToken();
  }

  getProfile () {
    const token = this.tokenService.getToken();
    return this.http.get<User>(`${this.apiUrl}/api/v1/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .pipe(
      map(user => {
        // Modify the retrieved user here
        return {
          ...user,
          avatar: `https://avatar.iran.liara.run/username?username=${user.name}`
        };
      })
    )
    .pipe(
      tap( user => this.user$.next(user))
    );
  }
}
