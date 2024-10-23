import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { AdminDashboardComponent } from './modules/components/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './modules/components/admin/admin-home/admin-home.component';
import { FooterComponent } from './modules/components/admin/utilities/footer/footer.component';
import { SidebarComponent } from './modules/components/admin/utilities/sidebar/sidebar.component';
import { NavbarComponent } from './modules/components/admin/utilities/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
