import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './views/error/error.component';
import { HeroesComponent } from './views/heroes/heroes.component';
import { SingleHeroComponent } from './views/single-hero/single-hero.component';
import { LoginComponent } from './views/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {HeroService} from "./services/hero/hero.service";
import {AuthService} from "./services/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { HeroesFormComponent } from './components/heroes-form/heroes-form.component';
import { AddHeroesComponent } from './views/add-heroes/add-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    HeroesComponent,
    SingleHeroComponent,
    LoginComponent,
      ErrorsFormComponent,
      HeroesFormComponent,
      AddHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [ HeroService,
      AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
