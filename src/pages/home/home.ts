import { SearchListPage } from './../search-list/search-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onsearchApi() {
    this.navCtrl.push(SearchListPage);
    
    console.log('pageSwitched');
  }
  onAvailableContent(){
    this.navCtrl.push(SearchListPage);
  }
}
