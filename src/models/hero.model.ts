export class Hero{

 private static _sId:number = 0;
 private _id:number;
  private _name: string;
  private _height: number;
  private _mass: number;
  private _hair_color: string;
  private _skin_color: string;
  private _eye_color: string;
  private _birth_year:string;
  private _gender: string;
  private _created:Date;
  private _edited:Date;


  constructor( name: string, height: number, mass: number, hair_color: string, skin_color: string, eye_color: string, birth_year: string, gender: string, created: Date, edited: Date) {
    this._id = ++Hero._sId;
    this._name = name;
    this._height = height;
    this._mass = mass;
    this._hair_color = hair_color;
    this._skin_color = skin_color;
    this._eye_color = eye_color;
    this._birth_year = birth_year;
    this._gender = gender;
    this._created = created;
    this._edited = edited;
  }

  static get sId(): number {
    return this._sId;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get mass(): number {
    return this._mass;
  }

  set mass(value: number) {
    this._mass = value;
  }

  get hair_color(): string {
    return this._hair_color;
  }

  set hair_color(value: string) {
    this._hair_color = value;
  }

  get skin_color(): string {
    return this._skin_color;
  }

  set skin_color(value: string) {
    this._skin_color = value;
  }

  get eye_color(): string {
    return this._eye_color;
  }

  set eye_color(value: string) {
    this._eye_color = value;
  }

  get birth_year(): string {
    return this._birth_year;
  }

  set birth_year(value: string) {
    this._birth_year = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get created(): Date {
    return this._created;
  }

  set created(value: Date) {
    this._created = value;
  }

  get edited(): Date {
    return this._edited;
  }

  set edited(value: Date) {
    this._edited = value;
  }

 static fromJSON(json: any):Hero{
    return new Hero(
      json.name,
      json.height,
      json.mass,
      json.hair_color,
      json.skin_color,
      json.eye_color,
      json.birth_year,
      json.gender,
      json.created,
      json.edited
    );
 }
}
