import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {Datos } from '../models/datos.model';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.page.html',
  styleUrls: ['./reservation-create.page.scss'],
})
export class ReservationCreatePage implements OnInit {
  post = {} as Datos;
  refe:any;
  datos:any;
  datos1:any;

 val : boolean;


  constructor(private firestore: AngularFirestore,
    private router: Router) {  }

  ngOnInit() {
   
  }


  async get(){
    try {
      this.refe = this.firestore.collection("reservaciones", ref => ref.where('fehca','==',this.post.fecha));
      this.refe.snapshotChanges().subscribe(data=>{
        this.datos1 = data.map(e=>{
          return{
            id: e.payload.doc.id,
            lugar: e.payload.doc.data()["lugar"],
            fecha: e.payload.doc.data()["fecha"],
          }
        })
      })
     



    } catch (error) {
      console.log("Error: en ver colonos");
    }
  }


  async crear(post: Datos){
    // this.get();
    if(this.validation()){
    try {
      // falta el nombre de la tabla
      await this.firestore.collection("reservaciones").add(post);      
    } catch (error) {
      console.log('Error: crear los datos');
    }   
    
  }   
}

  validation(){
    if(!this.post.nombre){
      console.log("falta el nombre");
      return false;
    }
    if(!this.post.fecha){
      console.log("falta el fecha");
      return false;
    }
    if(!this.post.domicilio){
      console.log("falta el domicilio");
      return false;
    }
    if(!this.post.lugar){
      console.log("falta el lugar");
      return false;
    }
    if(!this.post.costo){
      console.log("falta el costo");
      return false;
    }
    if(!this.post.estatus){
      console.log("falta el estatus");
      return false;
    }

  
    
    return true;
  }



}
