import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list:any;
  constructor(public navCtrl: NavController,
    private http: HttpClient,private socialSharing: SocialSharing) {
    
  }
  ionViewDidLoad(){
    this.list=[];
    this.http.get('https://newsapi.org/v2/top-headlines?language=ar&apiKey=0df1bdc8edbc4174984ade73fb272798').subscribe((data)=>{
      console.log(data['articles']);
      this.list=data['articles']
    })
  }

  info(title,des,img){
   this.navCtrl.push(InfoPage,{
     title:title,
     des:des,
     img:img
   });
  }

  share(title:string,img:string,url:string,desc:string){
this.socialSharing.shareViaWhatsApp(title,img,url);

  }

}
