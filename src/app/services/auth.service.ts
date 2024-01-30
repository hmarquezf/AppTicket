import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) =>{
      if(
        credential.email == 'prueba@prueba.com'
        && credential.password == '123456'
      ){
        accept('Login Correcto');
      }else{
        reject('Usuario y/o Contraseña inválido');
      }
    });
  }
  
  registerUser(credential: any){
    return new Promise((accept, reject) =>{
      if(
        credential.email == ''){
        accept('Registro Correcto');
        }else{
        reject('Usuario y/o Contraseña inválido');
        }
      });
    }
}
