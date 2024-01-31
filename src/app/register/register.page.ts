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
  registerValid: boolean= false;

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
        this.showAlert();
        this.navCtrl.navigateForward('/login');  

        }).catch(error => {
          console.log(error);
        });
      
    }else{
      this.registerValid = false;
      this.showAlertError();
      console.log("Las contraseñas no coinciden");
    }
  }


  goToLogin(){
    console.log("go to login");
    this.navCtrl.navigateBack('/login');
    this.storage.set('mostreLogin', true);
  }

  async showAlert() {  
  
    console.log(this.registerValid);
    const alert = await this.alertController.create({  
      header: 'Registro Exitoso',  
      subHeader: 'Su usuario ha sido creado con éxito.',  
      message: 'Por favor, inicie sesión para continuar.',  
      buttons: ['Aceptar']  
      });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  } 

  async showAlertError() {
    console.log(this.registerValid);
    const alert = await this.alertController.create({  
      header: 'Error',  
      subHeader: 'Verifique los datos ingresados.',  
      message: 'Valide sus datos e intente nuevamente.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);
  } 

}
