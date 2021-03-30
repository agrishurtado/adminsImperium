import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Datos } from '../models/datos.model';

@Component({
  selector: 'app-reservation-performed',
  templateUrl: './reservation-performed.page.html',
  styleUrls: ['./reservation-performed.page.scss'],
})
export class ReservationPerformedPage implements OnInit {
  datos:any;
  datosd:any;
  refe:any;
  refer:any;
  da:any;
  m:any;
  h:any;
  constructor(private firestore: AngularFirestore,
    private router:Router) {  }

ngOnInit() {
this.get();
}



async get(){
try {
  this.refe = this.firestore.collection("reservaciones",  ref => ref.orderBy('nombre', 'asc'));
  this.refe.snapshotChanges().subscribe(data=>{
  this.datos = data.map(e=>{
return{
  id: e.payload.doc.id,
  nombre: e.payload.doc.data()["nombre"],
  domicilio: e.payload.doc.data()["domicilio"],
  lugar: e.payload.doc.data()["lugar"],
  estatus: e.payload.doc.data()["estatus"],
  fecha: e.payload.doc.data()["fecha"],
  nunPersonas: e.payload.doc.data()["nunPersonas"],
  costo: e.payload.doc.data()["costo"],


    }
    })
    })
  } catch (error) {
  console.log("Error: en ver reservaciones");
}}

}


