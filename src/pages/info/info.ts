import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  title;
  des;
  img;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.title = navParams.get("title"),
   this.des = navParams.get("des"),
   this.img = navParams.get("img");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
