import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcaoModalPage } from './acao-modal';

@NgModule({
  declarations: [
    AcaoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AcaoModalPage),
  ],
})
export class AcaoModalPageModule {}
