import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import {Ionic2MaskDirective} from "ionic2-mask-directive";


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QntdMesasModalPage } from '../pages/qntd-mesas-modal/qntd-mesas-modal';
import { MesasPage } from '../pages/mesas/mesas';
import { AcaoModalPage } from '../pages/acao-modal/acao-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QntdMesasModalPage,
    MesasPage,
    AcaoModalPage,
    TabsPage,
    Ionic2MaskDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QntdMesasModalPage,
    MesasPage,
    AcaoModalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
