import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './controllers/header/header.component';
import { ErrorComponent } from './views/error/error.component';
import { HeroesComponent } from './views/heroes/heroes.component';
import { SingleHeroComponent } from './views/single-hero/single-hero.component';
import { LoginComponent } from './views/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {HeroService} from "./services/hero/hero.service";
import {AuthService} from "./services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    HeroesComponent,
    SingleHeroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule
  ],
  providers: [ HeroService,
      AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
