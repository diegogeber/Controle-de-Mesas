import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { MesasPage } from "../mesas/mesas";

@IonicPage()
@Component({
  selector: 'page-qntd-mesas-modal',
  templateUrl: 'qntd-mesas-modal.html',
})
export class QntdMesasModalPage {
  qtd:any;
  items: Array<number>;
  _data: any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public alertCtrl: AlertController
            ) {
    
    this.items = [];            
    for (let i = 0; i < 100; i++) {
      this.items[i] = i + 1;
    } 
    this._data = Date.now();
  }

  confirmaQtd(){
    if(this.qtd != null){
     this.navCtrl.pop();
     this.navCtrl.push(MesasPage,
                  {
                    qtdEnviada: this.qtd
                  }
                );
    }else{
      this.alertaErro();
    }
  }
  
  alertaErro(){
    let alert = this.alertCtrl.create({
      title: 'Quantidade Não Selecionada',
      subTitle: 'Para criar as mesas, você deve informar a quantidade desejada',
      buttons: ['OK']
    });
    alert.present();
  }

  backToHome(){
    this.viewCtrl.dismiss({ retornar: "backToHome"  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QntdMesasModalPage' );
  }

}
