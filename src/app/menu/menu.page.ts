import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  logged: any;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
   this.menu.close();
  }

  logout() {
    this.storage.set('userLoggedIn', false);
    this.navCtrl.navigateRoot('/login');
  }

  goToIntro(){
    this.navCtrl.navigateRoot('/intro');
  }

  validaLogin(){
    this.storage.get('userLoggedIn').then((val) => {
      this.logged = val;

    });
  }

}
