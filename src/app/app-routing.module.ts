import { CommonEngine } from '@angular/ssr';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './modules/components/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './modules/components/admin/admin-home/admin-home.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { SidebarComponent } from './modules/components/admin/utilities/sidebar/sidebar.component';


const routes: Routes = [{path:"", component:SignInComponent},{path:"sign-up", component:SignUpComponent},
                          {path:"admin", component:AdminDashboardComponent,
                          children:[{
                          path:"", component:AdminHomeComponent


                          }]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
