import { Address } from './../../app/core/Address';
import { AddressListPage } from './../../app/address-list/address-list';
import { SetupPage } from './../../app/setup/setup';
import { Component } from '@angular/core';
import { FabContainer, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  setup = SetupPage;
  address: Address;
  z: number = 18;
  defaultMapInfo = {
    lat: 35.895639,
    lng: 14.486888
  };
  located = false;
  
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.address = navParams.data.address;
    if (this.address) {
      this.located = true;
    }
  }

  goToLocations(fab: FabContainer) {
    fab.close;
    this.navCtrl.setRoot(AddressListPage);
  }

  getLatitude(): number {
    return this.located ? Number(this.address.latitude) : this.defaultMapInfo.lat;
  }

  getLongitude(): number {
    return this.located ? Number(this.address.longitude) : this.defaultMapInfo.lng;
  }

  close(fab: FabContainer) {
    fab.close();
  }

}
