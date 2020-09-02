import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ErrorHandlerComponent } from './shared/error-handler/error-handler.component';
import { ErrorHandlerModule } from './shared/error-handler/error-handler.module';
import { LoginModule } from '../app/login/login.module';
import { AdminLoginComponent } from '../app/login/admin-login/admin-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: AdminLoginComponent},
  { path: '**', component: ErrorHandlerComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ErrorHandlerModule, LoginModule]
})
export class AppRoutingModule { }
