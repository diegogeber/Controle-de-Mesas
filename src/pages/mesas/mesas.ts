import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Mesa } from "../../app/model/mesa"

@IonicPage()
@Component({
  selector: 'page-mesas',
  templateUrl: 'mesas.html',
})

export class MesasPage {
  private dataRecebida;
  private qtdRecebida;
 
  //importante: verifica se já tem uma instância de Mesa rodando na aplicação.
  public possuiMesaCadastrada : boolean;
  public listaMesas: Array<Mesa> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
           
    this.dataRecebida = navParams.get("dataEnviada");
    this.qtdRecebida = navParams.get("qtdEnviada");
    
      if(this.qtdRecebida > 0){
        for(var i = 0 ; i < this.qtdRecebida ; i++){
          this.listaMesas[i] = new Mesa(i+1);
          //TODO implementar sqlite para inserir lista no banco
        }
        this.possuiMesaCadastrada = true;
      }else if(this.possuiMesaCadastrada){
        //TODO implementar sqlite para buscar a lista
      }else{
        //TODO implementar fluxo excessao
      }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MesasPage');
  }

  backToHome(){
    this.navCtrl.pop(); 
  }

}
