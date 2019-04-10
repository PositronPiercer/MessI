import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'
import {AngularFireAuth } from 'angularfire2/auth'
import { AlertController } from 'ionic-angular'
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
	email
	passwd

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  signIn(){
  	this.fire.auth.signInWithEmailAndPassword(this.email,this.passwd)
  	.then((data)=>{
  		this.navCtrl.pop()

  	})
  	.catch((err)=>{
  		this.showAlert(err)

  	})
  }
      showAlert(err) {
    const alert = this.alertCtrl.create({
      title: "Can't log you in",
      subTitle: err,
      buttons: ['My Bad']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
