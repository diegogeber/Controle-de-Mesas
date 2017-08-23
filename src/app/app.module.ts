import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import {Ionic2MaskDirective} from "ionic2-mask-directive";
import { SQLite } from '@ionic-native/sqlite'
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { QntdMesasModalPage } from '../pages/qntd-mesas-modal/qntd-mesas-modal';
import { MesasPage } from '../pages/mesas/mesas';
import { AcaoModalPage } from '../pages/acao-modal/acao-modal';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigDataProvider } from '../providers/config-data/config-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QntdMesasModalPage,
    MesasPage,
    AcaoModalPage,
    Ionic2MaskDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,    
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
    ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigDataProvider
  ]
})
export class AppModule {}
