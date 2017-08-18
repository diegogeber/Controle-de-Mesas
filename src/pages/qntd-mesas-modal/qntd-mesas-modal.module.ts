import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QntdMesasModalPage } from './qntd-mesas-modal';

@NgModule({
  declarations: [
    QntdMesasModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QntdMesasModalPage),
  ],
})
export class QntdMesasModalPageModule {}
