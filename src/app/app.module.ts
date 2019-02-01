import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AdminServiceService } from './shared/services/admin-service.service';
import {  HttpModule } from '@angular/http';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartTutorComponent } from './piechart-tutor/piechart-tutor.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidenavComponent,
    routingcomponents,
    PiechartComponent,
    LinechartComponent,
    PiechartTutorComponent,
    
    
   
  ],
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AdminServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
