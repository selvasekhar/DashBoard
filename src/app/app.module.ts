import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ViewModule } from './View/view.module';
import { AlertComponent } from './commonView/alert/alert.component';
import { PreloadComponent } from './commonView/preload/preload.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './commonView/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    PreloadComponent,
  ],
  imports: [
    BrowserModule,    
    NgbModule,
    RouterModule,
    AppRoutingModule,
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
