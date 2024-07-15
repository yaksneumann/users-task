import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'users', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent) },
    { path: 'search', loadComponent: () => import('./search/search.component').then(m => m.SearchComponent) },
    { path: 'currency', loadComponent: () => import('./currency/currency.component').then(m => m.CurrencyComponent) },
    { path: 'ticket', loadComponent: () => import('./bus-ticket/bus-ticket.component').then(m => m.BusTicketComponent) },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
  ];