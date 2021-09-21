import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUsersComponent } from './create-users/create-users.component'; 
import { UserListComponent } from './user-list/user-list.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : '', redirectTo: 'login',pathMatch:'full'},
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent},
  {path : 'create-user', component:CreateUsersComponent},
  {path : 'user-list', component:UserListComponent},
  {path : 'staff-list', component:UserListComponent},
  {path : 'create-ticket', component:CreateTicketComponent},
  {path : 'ticket-list', component:TicketListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
