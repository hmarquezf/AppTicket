import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
  constructor(private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder){ 
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

  ngOnInit() {
  }

  login(login_data: any){
    console.log(login_data);
  }

  

}
