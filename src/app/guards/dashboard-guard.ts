import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth/services/auth';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  const user = auth.getCurrentUser();

  // if (user && user.role === 'admin') {
  if (user && user.email === 'aml@g.com' && user.password === 'Aml@1234') {
    return true;
  } else {
    alert('Access Denied! Admins Only.');
  }

  router.navigate(['/home']);
  return false;
};
