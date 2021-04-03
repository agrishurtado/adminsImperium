import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Datos } from '../models/datos.model';



@Component({
  selector: 'app-emergencies-siniestros',
  templateUrl: './emergencies-siniestros.page.html',
  styleUrls: ['./emergencies-siniestros.page.scss'],
})
export class EmergenciesSiniestrosPage implements OnInit {

  post = {} as Datos;
  datos:any;
  refe:any;
 

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
   currentUser = 'Administrador';
   @ViewChild(IonContent) content: IonContent;
  constructor(public router: Router,
    private firestore: AngularFirestore) {
   }

  ngOnInit() {
    this.get();
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
 async crear(post: Datos){
  if(this.validation()){
  try {
    // falta el nombre de la tabla
    this.post.usuario= "Administrador";
    this.post.f=  new Date().getTime();;
    await this.firestore.collection("siniestros/").add(post);      
  } catch (error) {
    console.log("errorr: al crear mensaje");
  }   
  this.post.mensaje="";
}   
}






 async get(){
  try {
    this.refe = this.firestore.collection("siniestros", ref => ref.where('usuario','!=',''));
    this.refe.snapshotChanges().subscribe(data=>{
      this.datos = data.map(e=>{
        return{
          id: e.payload.doc.id,
          usuario: e.payload.doc.data()["usuario"],
          mensaje: e.payload.doc.data()["mensaje"],
          f: e.payload.doc.data()["f"]
        }
      })
    })
  } catch (error) {
    console.log("Error: en ver colonos");
    
  }

}





validation(){  
   if(!this.post.mensaje){
    console.log("Escriba un mensaje ");
    return false;
  }
  return true;
}
 

}
