import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
//import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 // @ViewChild(IonModal) modal: IonModal;
  
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "Email es obligatorio"},
      {type: "pattern", message: "El Email ingresado es inválido"}
    ],
    password: [
      {type: "required", message: "La contraseña es obligatoria"},
      {type: "minLength", message: "Mínimo 4 caracteres"},
      {type: "maxLength", message: "Máximo 10 caracteres"},
      {type: "pattern", message: "La contraseña es inválida"}

    ]

  }
  recuperaPass: any;
  recuperaMenssage= 'Se enviará un email para restablecer su contraseña';
  loginMessage: any;
  loginPermiso: any;
  
  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder
    ){ 
  this.loginForm = this.formBuilder.group({
    email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        )
      ])
    ),
    password: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern("^[a-zA-Z0-9_.+-]+$")
      ])
    )
   })
  }

  goToHome(){
    console.log("go to Home");
    this.router.navigateByUrl('/home');
    this.storage.set('mostreElhome', true);
  }

  goToRegister(){
    console.log("go to Register");
    this.router.navigateByUrl('/register');
    this.storage.set('mostreElRegister', true);
  }

  ngOnInit() {
  }

  login(login_data: any){
    console.log(login_data);
    this.authService.loginUser(login_data).then(res =>{
      console.log(res);
      this.loginPermiso = true;
      this.storage.set('userLoggedIn', true);
      this.router.navigateByUrl('/home');
    }).catch(error => {
      this.loginMessage = error;
      this.loginPermiso = false;
    });
  }

}
