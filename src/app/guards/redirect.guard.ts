import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';
import { inject } from '@angular/core';

export const redirectGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const token = tokenService.getToken();

  if (token) {
    // Since already exists a token then redirect to /app even when trying to access to  /login
    router.navigate(['/app']);
  }

  return true;
};
