import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../../../models/hero.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.css']
})
export class HeroesFormComponent implements OnInit {
    @Input() heroToEdit : Hero|undefined;
    @Output() formSubmitted: EventEmitter<Hero>;
    form: FormGroup;
    hero: Hero;
    @Input() submitLabel: string;
    constructor() {
        this.hero = new Hero('',0,0,'','','',
            '','', new Date(), new Date());
        this.form = new FormGroup({});
        this.formSubmitted = new EventEmitter<Hero>();
        this.submitLabel = "AJOUTER!"

    }

    ngOnInit(): void {
        if(this.heroToEdit){
            this.hero = this.heroToEdit;
        }

        this.initForm();
    }
    private initForm():void {
        this.form.addControl('name',
            new FormControl(
                null,
                [
                    Validators.required
                ]
            ));
        this.form.addControl('height',
            new FormControl(
                null,
                [
                    Validators.required
                ]
            ));
        this.form.addControl('mass',
            new FormControl(
                null,
                [Validators.required]
            ));

        this.form.addControl('hair_color',
            new FormControl(
                null,
                [Validators.required]
            ));
        this.form.addControl('skin_color',
            new FormControl(
                null,
                [Validators.required]
            ));
        this.form.addControl('eye_color',
            new FormControl(
                null,
                [Validators.required]
            ));
        this.form.addControl('birth_year',
            new FormControl(
                null,
                [Validators.required]
            ));
        this.form.addControl('gender',
            new FormControl(
                null,
                [Validators.required]
            ));
    }


    onSubmitForm() {
        if(this.form.valid){
            this.formSubmitted.emit(this.hero);
        }
    }

}
