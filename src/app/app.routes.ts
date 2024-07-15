import { Routes } from '@angular/router';
// import { UsersComponent} from './users/users.component'
// import { SearchComponent } from './search/search.component';
// import { CurrencyComponent } from './currency/currency.component';
// import { BusTicketComponent } from './bus-ticket/bus-ticket.component';

// export const routes: Routes = [
//   { path: 'users', component: UsersComponent },
//   { path: 'search', component: SearchComponent },
//   { path: 'currency', component: CurrencyComponent },
//   { path: 'ticket', component: BusTicketComponent },
//   { path: '', redirectTo: '/users', pathMatch: 'full' }
// ];

export const routes: Routes = [
    { path: 'users', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent) },
    { path: 'search', loadComponent: () => import('./search/search.component').then(m => m.SearchComponent) },
    { path: 'currency', loadComponent: () => import('./currency/currency.component').then(m => m.CurrencyComponent) },
    { path: 'ticket', loadComponent: () => import('./bus-ticket/bus-ticket.component').then(m => m.BusTicketComponent) },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
  ];