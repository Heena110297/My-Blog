import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {username: 'admin' , password: 'pass', isAdmin: true},
    {username: 'user' , password: 'pass', isAdmin: false}
  ];

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
