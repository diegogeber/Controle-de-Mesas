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
  total:number;
 
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

  encerrar(){
    this.mesaRecebida.encerrarMesa= true;
    this.mesaRecebida.status=false;
    this.mesaFechada=true;
    this.mesaRecebida.valorTotal=0.00;
    this.navCtrl.pop();
  }

  adicionaItem(){
    
    if(this.mesaRecebida.valorIten != null){
      this.total = parseFloat(this.mesaRecebida.valorTotal.toString()) + parseFloat(this.mesaRecebida.valorIten.toString());  
      this.mesaRecebida.valorTotal = this.total;
      this.mesaRecebida.valorIten = null;
    }else{
        
    }
  }

  

}
