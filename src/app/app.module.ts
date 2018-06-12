import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { CustomValidator } from './signup/validatemail.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    CustomValidator
  ],
  imports: [
    UIRouterModule.forRoot({
      states: [
        { name: "login", url: "/login", component: LoginComponent },
        { name: "signup", url: "/signup", component: SignupComponent }
      ]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UIRouterModule]
})
export class AppModule { }
