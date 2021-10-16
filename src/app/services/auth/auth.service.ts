import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: BehaviorSubject<boolean>;
  email:string;
  password:string;
  constructor() {
      this.email ='elfindel69@gmail.com';
      this.password ='azerty';
      this.token = new BehaviorSubject<boolean>(false);
  }

  login(email:string,password:string):Promise<boolean> {
      if(this.email === email && this.password === password){
          return new Promise<boolean>((res, rej)=>{ this.token.next(true); res(true)});
      }
      return new Promise<boolean>((res, rej)=>{ this.token.next(false); res(false)});
  }

  logout():Promise<void>{
    return new Promise<void>((res, rej) =>{
      this.token.next(false);
      res();
    })
  }
}
