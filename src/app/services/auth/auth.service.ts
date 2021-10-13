import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: BehaviorSubject<boolean>
  constructor() {
    this.token = new BehaviorSubject<boolean>(false);
  }

  login():Promise<boolean> {
     return new Promise<boolean>((res, rej)=>{ this.token.next(true); res(true)});
  }

  logout():Promise<void>{
    return new Promise<void>((res, rej) =>{
      this.token.next(false);
      res();
    })
  }
}
