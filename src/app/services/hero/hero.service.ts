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
    /* return this.httpClient.get("https://swapi.dev/api/people/"+id)
      .pipe(map((heroAsJSON:any) => Hero.fromJSON(heroAsJSON)))
      .toPromise();*/
       return new Promise<Hero>(
           (res, rej) => {

               const heroes = this.heroes.getValue();
               console.log(heroes);
               for (const hero of heroes) {
                   console.log(hero);
                   if (hero.id === id) {
                       console.log(hero);
                       res(hero);
                       break;
                   }
               }
           })

   }

    save(hero: Hero) :Promise<any>{
        const heroes = this.heroes.getValue();
        hero.id = heroes.length+1;
        heroes.push(hero);
        this.heroes.next(heroes);
        return new Promise<void>((res) => {res()})

    }

    update(heroEdited: Hero) :Promise<any> {
        const heroes = this.heroes.getValue();

        for (const[index, hero] of heroes.entries()) {
            if(hero.id === heroEdited.id){
                heroes[index] = heroEdited;
                this.heroes.next(heroes);
                break;
            }
        }
        return new Promise<void>((res) => {res()})
    }


    delete(id: number) {
        const heroes = this.heroes.getValue();
        for (const[index, hero] of heroes.entries()) {
            if(hero.id === id){
                heroes.splice(index,1);
                this.heroes.next(heroes);
                break;
            }
        }
        return new Promise<void>((res) => {res();})
    }
}
