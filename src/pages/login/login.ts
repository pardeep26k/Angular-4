import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import {MyApp} from '../../app/app.component';
import { Dashboard } from '../dashboard/dashboard';
import { HttpService } from '../../providers/http-service'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export class User {
  username : String;
  password : String;
}
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user : User;
//  httpService : HttpService;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService : HttpService) {
    this.user  = new User();
    //this.httpService = HttpService;
  }

   
  login (form: NgForm){
    var ref = this;
      this.httpService.get('metadata.json').subscribe(metadata => {
    
      var dashboards = metadata.dashboards;
     this.navCtrl.setRoot(Dashboard,{ "data":dashboards[0].children[0]})
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
