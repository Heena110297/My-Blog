import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   /** Array of login user data. */
   private loginData: User[];

   constructor() {
     this.getUsers();
   }

   /** Method to get all login user data. */
   getUsers(): User[] {
     this.loginData = [{
       id: 1,
       username: 'heena',
       password: 'heena'
     }, {
      id: 2,
      username: 'admin',
      password: 'admin'
     }];
     return this.loginData;
   }

   /** Method that validates login credentials passed by user. */
  validateUser(user: User): boolean {
    let validUser = false;
    if ((this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1)
     && (this.loginData.findIndex(usr => user.password.toLowerCase() === usr.password.toLowerCase()) > -1)) {
      validUser = true;
    }
    return validUser;
  }
}
