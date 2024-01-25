import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Storage } from '@ionic/storage-angular';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

public selectedIndex = 0;
public appPages = [
  {
    tittle: 'Inicio',
    url: '/home',
    icon: 'home-outline',
  },
  {
    tittle: 'Buscar',
    url: '/home',
    icon: 'search',
  },
  {
    tittle: 'Eventos',
    url: '/home',
    icon: 'radio-outline',
  }

]

  constructor(private storage: Storage) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

}