import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
//import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validation_Messages = {
    email: [
      {type: "required", message: "Email es obligatorio"},
      {type: "pattern", message: "El Email ingresado es inválido"}
    ],
    password: [
      {type: "required", message: "La contraseña es obligatoria"},
      {type: "minLength", message: "Mínimo 4 caracteres"},
      {type: "maxLength", message: "Máximo 10 caracteres"},
      {type: "pattern", message: "La contraseña es inválida"}

    ],
    confirmaPassword: [
      {type: "required", message: "La contraseña es obligatoria"},
      {type: "minLength", message: "Mínimo 4 caracteres"},
      {type: "maxLength", message: "Máximo 10 caracteres"},
      {type: "pattern", message: "La contraseña es inválida"}

    ],
    name: [
      {type: "required", message: "Nombre es obligatorio"},
    ],
    last_name: [
      {type: "required", message: "Apellido es obligatorio"},
    ]
  }

  registerForm: FormGroup;
  registerMessage: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) { 
    this.registerForm = this.formBuilder.group({
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
      ),
      confirmaPassword: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
          Validators.pattern("^[a-zA-Z0-9_.+-]+$")
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    })
  }

  ngOnInit() {
  }

  register(register_data: any){
    console.log(register_data);
   // this.authService.loginUser(register_data).then(res =>{
   //   console.log(res);
      this.storage.set('userLoggedIn', true);
      this.router.navigateByUrl('/login');
  //  }).catch(error => {
   //   this.registerMessage = error;
   // });
  }

  goToLogin(){
    console.log("go to login");
    this.router.navigateByUrl('/login');
    this.storage.set('mostreLogin', true);
  }

}
