import { HomePage } from './../../pages/home/home';
import { AddressService } from './../core/address-service/address-service';
import { Address } from './../core/Address';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
})
export class AddressListPage {
  public addresses: Promise<Address[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private addressService: AddressService) {
  }

  ionViewDidLoad() {
    this.addresses = this.addressService.fetchAll();
  }


  selectLocation(address: Address) {
    this.navCtrl.setRoot(HomePage, { address });
  }

}
