import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Datos } from '../models/datos.model';

import { User } from '../models/user.model';


@Component({
  selector: 'app-emergencies-robo',
  templateUrl: './emergencies-robo.page.html',
  styleUrls: ['./emergencies-robo.page.scss'],
})
export class EmergenciesRoboPage implements OnInit {
 
  @ViewChild("content") content: any;
  post = {} as Datos;
  datos:any;
  refe:any;
  datosadmin:any;
  usuario: string ="Administrador";


  constructor(private firestore: AngularFirestore,
    private router:Router) { }

  ngOnInit() {
    this.get();
    // this.scrollToBotoom();
  }
  async get(){
    try {
      this.refe = this.firestore.collection("robos", ref => ref.where('usuario','!=',''));
      this.refe.snapshotChanges().subscribe(data=>{
        this.datos = data.map(e=>{
          return{
            id: e.payload.doc.id,
            usuario: e.payload.doc.data()["usuario"],
            mensaje: e.payload.doc.data()["mensaje"],
          }
        })
      })
    } catch (error) {
      console.log("Error: en ver colonos");
      
    }
  
  }



  async crear(post: Datos){
    if(this.validation()){
    try {
      // falta el nombre de la tabla
      this.post.usuario= "Administrador";
      await this.firestore.collection("robos/").add(post);      
    } catch (error) {
      console.log("errorr: al crear mensaje");
    }   
    this.post.mensaje="";
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
