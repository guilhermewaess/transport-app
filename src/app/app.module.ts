import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FormsModule } from'@angular/forms'; 
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AuthenticationModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
