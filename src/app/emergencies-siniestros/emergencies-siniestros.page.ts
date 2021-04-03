import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-emergencies-siniestros',
  templateUrl: './emergencies-siniestros.page.html',
  styleUrls: ['./emergencies-siniestros.page.scss'],
})
export class EmergenciesSiniestrosPage implements OnInit {

     messages = [
    { user: 'simon',
     createdAt : '1554090856000',
    msg: 'hey whats up mate?'
  },
  { user: 'max',
  createdAt : '1554090856000',
  msg: 'working on the Ionic mission, you'
  },
  
   ];

   newMsg= '';
   currentUser = 'simon';
   @ViewChild(IonContent) content: IonContent;
  constructor(public router: Router) {
   }

  ngOnInit() {
  }



 senMessage(){
  this.messages.push({
    user: 'max',
    createdAt : '1554090856000',
    msg: this.newMsg
  });
  this.newMsg ='';
  setTimeout(() => {
    this.content.scrollToBottom(200);
  });
 }
 

}
