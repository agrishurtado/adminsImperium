import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Datos } from '../models/datos.model';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-emergencies-salud',
  templateUrl: './emergencies-salud.page.html',
  styleUrls: ['./emergencies-salud.page.scss'],
})
export class EmergenciesSaludPage implements OnInit {

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
    await this.firestore.collection("salud/").add(post);      
  } catch (error) {
    console.log("errorr: al crear mensaje");
  }   
  this.post.mensaje="";
}   
}






 async get(){
  try {
    this.refe = this.firestore.collection("salud", ref => ref.where('usuario','!=',''));
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
