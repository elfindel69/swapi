import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Hero} from "../../../models/hero.model";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: BehaviorSubject<Array<Hero>>;
  constructor(private httpClient:HttpClient, private authService:AuthService) {
    this.heroes = new BehaviorSubject<Array<Hero>>([]);
    this.getHeroes();

  }

  getHeroes() {
    this.httpClient.get("https://swapi.dev/api/people")
      .pipe(map((data:any) =>data.results.map( (heroAsJSON:any) => Hero.fromJSON(heroAsJSON))))
      .toPromise()
      .then((heroes:Array<Hero>)=>this.heroes.next(heroes) );
  }

   getHeroById(id:number):Promise<Hero> {
     return this.httpClient.get("https://swapi.dev/api/people/"+id)
      .pipe(map((heroAsJSON:any) => Hero.fromJSON(heroAsJSON)))
      .toPromise();
  }
}
