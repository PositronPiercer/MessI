

import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase'
import {config} from '../../app/environment'
import {LoginPage} from '../login/login'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	headCount=0;
	day=-1
	ref = firebase.database().ref()
	myDate= new Date()
	breakfast=""
	lunch=""
	dinner=""
      
      sign_out(){
        firebase.auth().signOut()
      }
  constructor(public navCtrl: NavController) {


        login_check()
  	
  	this.day=this.myDate.getDay()
  	this.ref.child("/schedule/"+this.day).once('value')
  							   .then((snap)=>{
  							   	this.dinner=snap.val().dinner
  							   	this.lunch=snap.val().lunch
  							   	this.breakfast=snap.val().breakfast
  							   	console.log('Menu Updated')

  							   })


  	this.ref.child("/npersons").on('value',(snap)=>{
  		console.log('Connected to db!')
  		console.log(snap.val())
  		this.headCount=snap.val()


  	})

                function login_check(){
          firebase.auth().onAuthStateChanged(function(user){
                                        if(user){
                                                console.log(user)
                                                console.log('Authenticated')
                                                   

                                                // document.getElementById('signout')
                                                //                 .setAttribute('style','display:display-inline; visibility:visible')          
                                                
                                                
                                        }
                                        else{
                                                console.log('Not Auth')
                                                navCtrl.push(LoginPage)
                                                
                         
                                                // document.getElementById('signout')
                                                //                 .setAttribute('style','display:none; visibility:hidden')                               

                                               
                                        }
                                })

        }


  }

}
