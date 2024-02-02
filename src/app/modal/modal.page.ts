import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  nameSlide: any;
  descriptionSlide: any;
  addresSlide: any;
  citySlide: any;
  dateSlide: any;
  idSlide: any;
  constructor(
    private modalController: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.cargarDatos();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  cargarDatos(){
    this.storage.get('idSlide').then((val) => {
      this.nameSlide = val.name;
      this.descriptionSlide = val.description;
      this.addresSlide = val.address;
      this.citySlide = val.city;
      this.dateSlide = val.event_date;
    });
    
  }
}
