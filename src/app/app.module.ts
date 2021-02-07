import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRouting } from './app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRouting,
    AuthModule.forRoot({
      domain: 'dev-qnt6laog.us.auth0.com',
      clientId: 'MKf0LT4QwNhNSYee4jIoN8SnVFrTMIyT'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
