import { AddressListPage } from './../../app/address-list/address-list';
import { SetupPage } from './../../app/setup/setup';
import { Component } from '@angular/core';
import { FabContainer, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  setup = SetupPage;

  constructor(public navCtrl: NavController) {

  }

  goToLocations(fab: FabContainer) {
    fab.close;
    this.navCtrl.setRoot(AddressListPage);
  }

  close(fab: FabContainer) {
    fab.close();
  }

}
