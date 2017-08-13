import { AddressListPage } from './address-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AddressListPage
  ],
  imports: [
    IonicPageModule.forChild(AddressListPage),
  ],
})
export class AddressListModule {}