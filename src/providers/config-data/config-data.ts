import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConfigDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

let key_name = "config";   
@Injectable()
export class ConfigDataProvider {

  private listaMesa = {
    mesas:[{
      idMesa:null,
      status: false,
      valorTotal:0,
      valorIten:null,
      descricaoMesa:"",
      
      encerrarMesa: false,
      numeroMesa: null
    }],
    existeLista:false

  }

  constructor(public http: Http) {
    console.log('Hello ConfigDataProvider Provider');
  }

  getConfigData(): any{
    return  localStorage.getItem(key_name);
  }

  setConfigData(
                status?:boolean,
                valorTotal?:number,
                valorIten?:number,
                descricaoMesa?:string,
                encerrarMesa?:boolean,
                numeroMesa?:number,
                aux?:number
                ){
    let listaMesa = {
      mesas:[{
        
        status: false,
        valorTotal:0,
        valorIten:null,
        descricaoMesa:"",
        encerrarMesa: false,
        numeroMesa: null
      }]
    }
        
    listaMesa.mesas[aux].status = status;
    listaMesa.mesas[aux].valorTotal = valorTotal;
    listaMesa.mesas[aux].valorIten = valorIten;
    listaMesa.mesas[aux].descricaoMesa = descricaoMesa;
    listaMesa.mesas[aux].encerrarMesa = encerrarMesa;
    listaMesa.mesas[aux].numeroMesa = numeroMesa;
  

    localStorage.setItem(key_name, JSON.stringify(listaMesa));
  }

}
