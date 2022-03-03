import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './views/signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { ShownewsComponent } from './views/shownews/shownews.component';
import { AddnewsComponent } from './views/addnews/addnews.component';
import { NewsService } from './services/news.service';
import { TokenService } from './services/token.service';
import { ReportersService } from './services/reporters.service';
import { UpdateComponent } from './views/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ShownewsComponent,
    AddnewsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService ,
     NewsService,
     ReportersService,
     {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
