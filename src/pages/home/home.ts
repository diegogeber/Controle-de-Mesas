import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { QntdMesasModalPage } from '../qntd-mesas-modal/qntd-mesas-modal';
import { Mesa } from "../../app/model/mesa";
import { ConfigDataProvider } from "../../providers/config-data/config-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listaMesas: any = null;
  
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public cfgProvider: ConfigDataProvider
              ) {
    this.listaMesas = localStorage.getItem("config");            
                 
  }

  modalCadastraQtd(){
    let modal = this.modalCtrl.create(QntdMesasModalPage);
    modal.present();
    modal.onDidDismiss( data => console.log(data));
  }

  isDisabled(){
    return false;
  }

}
