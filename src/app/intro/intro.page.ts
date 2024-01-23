import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Bienvenido a Tu Pass!",
      description: "Descubre una experiencia única en la compra de boletos y eventos con nuestra aplicación.<br>Tu acceso exclusivo a eventos increíbles está a solo un toque de distancia",
      image: "../../assets/imagenes/slider1.svg"
    },
    {
      title: "Explora Eventos Exclusivos",
      description : "Navega por una amplia variedad de eventos: conciertos, deportes, teatro y más.<br>Con nuestra aplicación, accede a eventos exclusivos que se adaptan a tus gustos y preferencias.",
      image: "../../assets/imagenes/slider2.svg"
    },
    {
      title: "Compra Fácil y Segura",
      description: "Explora eventos, elige tus boletos y realiza transacciones sin complicaciones.<br><br><strong>Tu seguridad es nuestra prioridad.!!!</strong>",
      image: "../../assets/imagenes/slider3.svg"
    },
    {
      title: "Personaliza tu Experiencia",
      description: "Adapta la aplicación a tus necesidades. Guarda eventos favoritos, recibe notificaciones sobre preventas y descuentos exclusivos.<br><br><strong> Personaliza tu experiencia al máximo.</strong>",
      image: "../../assets/imagenes/slider4.svg"
    },
    {
      title: "Únete a la Comunidad",
      description: "Conviértete en parte de una comunidad apasionada por los eventos. Comparte experiencias, conoce a otros amantes de la música y el entretenimiento.<br><strong>Únete a la revolución de la compra de boletos.</strong>",
      image: "../../assets/imagenes/slider5.svg"
    }
  ]


  constructor(private router: Router,
    private storage: Storage) { }

  goToHome(){
    console.log("go to home");
    this.router.navigateByUrl('/home');
    this.storage.set('mostreElhome', true);
  }

  ngOnInit() {
  }

}
