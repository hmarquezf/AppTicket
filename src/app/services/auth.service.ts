import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: Storage
  ) { }

  loginUser(credential: any){
    return new Promise((accept, reject) =>{
      if(
        (credential.email == 'prueba@prueba.com'
        && credential.password == '123456') 
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
        credential.email != '' && credential.password != '' && credential.confirmaPassword != '' && credential.name != '' && credential.last_name != ''){
        accept('Registro Correcto');
        }else{
        reject('Usuario y/o Contraseña inválido');
        }
      });
    }
}
