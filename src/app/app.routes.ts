import { Routes } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';

export const routes: Routes = [
    //te redirie al login
    {path: '',redirectTo : '/login',pathMatch : "full"},
    //mi componente login
    {path: 'login', component : LoginComponent},
    {path: 'home', component : DashboardComponent},
];