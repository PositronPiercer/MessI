import { Component,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase'
import { AlertController } from 'ionic-angular'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  private dateOfEvent
  private minDateOfPicker
  private meal
        book_1
        book_2




    

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    this.minDateOfPicker=new Date().toISOString()
        this.update_my_bookings()
      
        
        
 
  }



    update_my_bookings(){
          console.log('updating bookings')
         firebase.auth().onAuthStateChanged((user)=>{
                                        if(user){
      var uid=firebase.auth().currentUser.uid
      var ref=firebase.database().ref("bookings/"+uid)
      ref.on('value',(snap)=>{
        if(snap.exists()){
          var books = Object.keys(snap.val())
          console.log(snap.val(),books)
          this.book_1 = snap.val()[books[0]].meal +" at "+ snap.val()[books[0]].time
                                if(books.length>1){
          this.book_2 = snap.val()[books[1]].meal +" at "+ snap.val()[books[1]].time
                            }
                                console.log("book_1",this.book_1)
        }
        else{
          this.book_1 = "No Bookings"
        }
      })
                   }
                                      })

    }

  book(){
    var cuser=firebase.auth().currentUser
    var uid=cuser.uid

    // console.log(this.meal)
    // console.log(this.dateOfEvent)

    var time = this.dateOfEvent
    var nextday=new Date();
    var day=new Date()
    nextday.setDate(day.getDate()+1);
    var ref=firebase.database().ref("bookings/"+uid+"/"+nextday)
    ref.set({
      name: cuser.displayName,
      email: cuser.email,
      time:this.dateOfEvent,
      date:nextday,
      meal:this.meal

    })
    this.showAlert(this.dateOfEvent)
    //console.log(food)

  }
    showAlert(time) {
    const alert = this.alertCtrl.create({
      title: 'Your Table has been booked',
      subTitle: 'See you tomorrow at '+time,
      buttons: ['OK']
    });
    alert.present();
  }

}
	