import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  isAlertOpen = false;
  alertButtons = ['Aceptar'];

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

    ],
    confirmaPassword: [
      {type: "required", message: "La contraseña es obligatoria"},
      {type: "minLength", message: "Mínimo 4 caracteres"},
      {type: "maxLength", message: "Máximo 10 caracteres"},
      {type: "pattern", message: "La contraseña es inválida"}

    ],
    name: [
      {type: "required", message: "Nombre es obligatorio"},
      {type: "pattern", message: "El nombre ingresado es inválido"}
    ],
    last_name: [
      {type: "required", message: "Apellido es obligatorio"},
      {type: "pattern", message: "El apellido ingresado es inválido"}
    ]
  }

  registerForm: FormGroup;
  registerValid: any;
  headerSuccess="Registro Exitoso";
  subHeaderSuccess="Su usuario ha sido creado con éxito."
  messageSuccess="Por favor, inicie sesión para continuar."
  headerError="Error";
  subHeaderError="Verifique los datos ingresados."
  messageError="Valide sus datos e intente nuevamente."

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService,
    private alertController: AlertController,
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
          Validators.pattern("^[a-zA-Z0-9_.+-]+$"),
          
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z]+$")
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z]+$")
        ])
      )
    })
  }

  ngOnInit() {
  }

  register(register_data: any){
    console.log(register_data);
    if(register_data.password == register_data.confirmaPassword){

      this.authService.registerUser(register_data).then(res =>{

          this.storage.set('userCreatedIn', true);
          this.storage.set('user', register_data);

          this.registerValid= true;
          this.navCtrl.navigateForward('/login');  

        }).catch(error => {
          console.log(error);
        });
      
    }else{
      this.registerValid = false;
      console.log("Las contraseñas no coinciden");
    }
  }


  goToLogin(){
    console.log("go to login");
    this.navCtrl.navigateBack('/login');
    this.storage.set('mostreLogin', true);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
