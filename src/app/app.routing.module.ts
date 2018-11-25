import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './home-view/homeView.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ 
    HomeViewComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot([
        { path: 'login', component: LoginComponent, 
        },
        { path: 'displayZone', component: HomeViewComponent, 
        },
        {
          path: '**', redirectTo: 'login'
        }  
    ]),
    FormsModule,
    BrowserModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


