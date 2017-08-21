import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { MesasPage } from "../mesas/mesas";
import { Mesa } from "../../app/model/mesa";

@IonicPage()
@Component({
  selector: 'page-acao-modal',
  templateUrl: 'acao-modal.html',
})
export class AcaoModalPage {
  mesaRecebida:Mesa;
  mesaFechada:boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public alertCtrl: AlertController) {
       
    this.mesaRecebida = navParams.get("itemEnviado");
   
     console.log(this.mesaRecebida);
                
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AcaoModalPage');
  }

  isReadOnly(){
    if(this.mesaRecebida.status == true){
      return false;
    }else{
      
      return true;
    }
  }

  alertaEncerrar(){
    
  }

  

}
