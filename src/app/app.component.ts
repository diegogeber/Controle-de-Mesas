import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from "../pages/home/home";
import { ConfigDataProvider } from "../providers/config-data/config-data";

@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigDataProvider
  ]
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,configDataProvider:ConfigDataProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
