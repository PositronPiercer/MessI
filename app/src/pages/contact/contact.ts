import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


	menu
	data

	only_God_knows_why_i_am_using_this_variable

  constructor(public navCtrl: NavController) {
  	console.log('Filling Schedule')
  	this.fill_schedule()

  }

  fill_schedule(){
  	 var ref=firebase.database().ref("schedule/")
  	 var weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  	 var schedule_html=""
  	 var data
  	 ref.once('value')
  	 .then((snap)=>{
  	 	this.data=snap.val()
  	 	//console.log(snap.val())
  	 	//console.log(this.data)
  	 	var days=Object.keys(this.data)
  	 	//console.log(days)
  	 	days.forEach((day)=>{
  	 		//console.log(day)
  	 		schedule_html+="<ion-card>"
  	 		schedule_html+="<ion-card-header>"+weekdays[day]+"</ion-card-header><ion-list>"
  	 		this.only_God_knows_why_i_am_using_this_variable = this.data[day]
  	 		//console.log(this.only_God_knows_why_i_am_using_this_variable)
  	 		var timings = Object.keys(this.only_God_knows_why_i_am_using_this_variable)
  	 		//console.log(timings)
  	 		timings.forEach((timing)=>{
  	 			schedule_html+="<ion-item>"+timing+" : "+this.data[day][timing]+"</ion-item>"
  	 		})
  	 		schedule_html+="</ion-list></ion-card>"
  	 	})
  	 	//console.log(snap.val())
  

  	 	
  	 	
  	 this.menu=schedule_html
  	 //console.log(this.menu)

  	 })

  }

}
