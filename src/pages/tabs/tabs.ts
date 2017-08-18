import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MesasPage } from '../mesas/mesas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
 
 
  constructor() {

  }
}
