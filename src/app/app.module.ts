import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { SideBarComponent } from './main-components/side-bar/side-bar.component';
import { LoginComponent } from './main-components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from './test/myform/myform.component';
import { ReactMyFormComponent } from './test/react-my-form/react-my-form.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PlayWithFirebaseComponent } from './test/play-with-firebase/play-with-firebase.component';
import { AddcustomerComponent } from './dashboard/addcustomer/addcustomer.component';
import { SpinnerComponent } from './main-components/alertsAndSpinners/spinner/spinner.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'form', component: MyformComponent },
  { path: 'reactForm', component: ReactMyFormComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
      children: [
        {
          path: 'addCustomer', // child route path
          component: AddcustomerComponent, // child route component that the router renders
        },
        // {
        //   path: 'child-b',
        //   component: ChildBComponent, // another child route component that the router renders
        // },
      ], },
  { path: 'playFB', component: PlayWithFirebaseComponent,canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    DashboardComponent,
    MyformComponent,
    ReactMyFormComponent,
    PlayWithFirebaseComponent,
    AddcustomerComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    AngularFirestoreModule
   
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
