import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { TutorComponent } from './tutor/tutor.component';
import { LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'Tutor', component:TutorComponent },
  { path:'layout', component:LayoutComponent },
  { path:'student', component:StudentComponent },
  { path:'Dashboard', component:DashboardComponent },
  { path:'Message', component:MessageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[LoginComponent, TutorComponent, LayoutComponent,StudentComponent,DashboardComponent,MessageComponent]

