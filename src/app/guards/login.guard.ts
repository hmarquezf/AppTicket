import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private storage: Storage,
    private router: Router
  ){ }

  async canActivate(){
    const userLoggedIn = await this.storage.get('userLoggedIn');
    
    if(userLoggedIn){
      console.log('El usuario está logueado');
      return true;
    }else{
      console.log('El usuario no está logueado');
      this.router.navigateByUrl('/login');
      return false;
    }

  }
    
}
  
