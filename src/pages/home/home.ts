import { SetupPage } from './../../app/setup/setup';
import { Component } from '@angular/core';
import { FabContainer, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSetup(fab: FabContainer) {
    fab.close();
    this.navCtrl.push(SetupPage, {}, { animate: true, direction: 'forward' });
  }

}
