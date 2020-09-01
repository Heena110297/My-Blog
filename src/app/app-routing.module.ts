import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ErrorHandlerComponent } from './shared/error-handler/error-handler.component';
import { ErrorHandlerModule } from './shared/error-handler/error-handler.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ErrorHandlerComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ErrorHandlerModule]
})
export class AppRoutingModule { }
