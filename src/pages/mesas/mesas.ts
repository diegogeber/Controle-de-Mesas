import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Mesa } from "../../app/model/mesa"
import { AcaoModalPage } from "../acao-modal/acao-modal"
import { ConfigDataProvider } from "../../providers/config-data/config-data";

@IonicPage()
@Component({
  selector: 'page-mesas',
  templateUrl: 'mesas.html',
   
})

export class MesasPage {
  
  private dataRecebida;
  private qtdRecebida;
  private sendParam: any;

  public possuiMesaCadastrada : boolean;
  public listaMesas: Array<Mesa> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public configDataProvider:ConfigDataProvider
              
            ) {
           
    this.dataRecebida = navParams.get("dataEnviada");
    this.qtdRecebida = navParams.get("qtdEnviada");
    
      if(this.qtdRecebida > 0){
        for(var i = 0 ; i < this.qtdRecebida ; i++){
          this.listaMesas[i] = new Mesa(i+1);
          //TODO implementar localstorage
         /*  configDataProvider.setConfigData(this.listaMesas[i].status,
                                           this.listaMesas[i].valorTotal,
                                           this.listaMesas[i].valorIten,
                                           this.listaMesas[i].descricaoMesa,
                                           this.listaMesas[i].encerrarMesa,
                                           this.listaMesas[i].numeroMesa ,
                                           i
                                            ); */
                                       

        }
        /* let listaMesa = configDataProvider.getConfigData();
        console.log(listaMesa); */
        this.possuiMesaCadastrada = true;
      }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MesasPage');
  }
  
  backToHome(){
    
  }

  itemSelected(item) {
    this.sendParam = item;
    console.log("Selected Item", this.sendParam);
    this.navCtrl.push(AcaoModalPage,
      {
        itemEnviado: this.sendParam
      }
    );
  }
    
}


