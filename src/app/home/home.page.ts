import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  event_list: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
    ) {}

   ionViewDidEnter(){
    this.events.getEvents().then(
    res => {
      this.event_list = res;
      console.log("Eventos Server",this.event_list);
      
    }
    ) 
    console.log("Categorias", this.events.getCategories());
    console.log("Categoria 1", this.events.getCategory(1));
    console.log("Local Events",this.events.getLocalEvents().events);

  } 

  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }

  goToLogin(){
    console.log("go to login");
    this.router.navigateByUrl('/login');
    this.storage.set('mostreLogin', true);
  }

}
