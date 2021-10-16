import { Component, OnInit } from '@angular/core';
import {Hero} from "../../../models/hero.model";
import {HeroService} from "../../services/hero/hero.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-hero',
  templateUrl: './single-hero.component.html',
  styleUrls: ['./single-hero.component.css']
})
export class SingleHeroComponent implements OnInit {

  hero: Hero|undefined;
  constructor(private heroService:HeroService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.params.id);
    this.heroService.getHeroById(id).then((hero:Hero)=>this.hero = hero);
  }

    onClickDeleteBtn() {
        if(this.hero){

            this.heroService.delete(this.hero.id).then(()=>this.router.navigateByUrl('heroes'));
        }
    }
}
