import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'
import {AngularFireAuth } from 'angularfire2/auth'
import { AlertController } from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	email
	passwd

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  register(){
  	this.fire.auth.createUserWithEmailAndPassword(this.email,this.passwd)
  	.then((data)=>{
  		this.fire.auth.signInWithEmailAndPassword(this.email,this.passwd);
  		this.showAlert("Successfully Registered","Welcome")
  		this.navCtrl.pop()

  	})
  	.catch((err)=>{
  		this.showAlert("Can't sign you up",err)

  	})
  }
      showAlert(title,err) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: err,
      buttons: ['Ok']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
