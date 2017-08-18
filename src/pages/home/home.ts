import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { QntdMesasModalPage } from '../qntd-mesas-modal/qntd-mesas-modal';
import { TabsPage } from "../tabs/tabs";
import { Mesa } from "../../app/model/mesa";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listaMesas: Array<Mesa> = [];
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController ) {

  }

  modalCadastraQtd(){
    let modal = this.modalCtrl.create(QntdMesasModalPage);
    modal.present();
    modal.onDidDismiss( data => console.log(data));
   
  }

}
