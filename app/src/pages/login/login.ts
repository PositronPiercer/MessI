import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'
import {SigninPage } from '../signin/signin'
import {RegisterPage } from '../register/register'



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.check_login()

  }
  check_login(){
     firebase.auth().onAuthStateChanged((user)=>{
                                        if(user){
                                                console.log(user)
                                                this.navCtrl.pop()
                                                   }})
  }
  signIn(){
    this.navCtrl.push(SigninPage)

  }
   register(){
     this.navCtrl.push(RegisterPage)

   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
