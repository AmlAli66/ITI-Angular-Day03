import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard } from './guards/auth-guard';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { AddProduct } from './components/add-product/add-product';
import { dashboardGuard } from './guards/dashboard-guard';

export const routes: Routes = [

    {
        path: '',
        component: AuthLayout,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: Login },
            { path: 'register', component: Register },
        ]
    },

    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: 'home', component: Home
            },
            { path: 'add-product', component: AddProduct },
            { path: 'edit-product/:id', component: AddProduct },
            { path: 'dashboard', component: Dashboard, canActivate: [dashboardGuard] },
        ]
    },

    { path: '**', redirectTo: 'login' }


];
