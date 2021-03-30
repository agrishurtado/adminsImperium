import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acces-program',
  templateUrl: './acces-program.page.html',
  styleUrls: ['./acces-program.page.scss'],
})
export class AccesProgramPage implements OnInit {
  datos:any;
  datosd:any;
  refe:any;
  refer:any;

    constructor(private firestore: AngularFirestore,
                private router:Router) { }

  ngOnInit() {
    this.get();
    this.getf();
  }

  async get(){
    try {
      this.refe = this.firestore.collection("indefinida", ref => ref.orderBy('nombre', 'asc'));
      this.refe.snapshotChanges().subscribe(data=>{
        this.datos = data.map(e=>{
          return{
            id: e.payload.doc.id,
            nombre: e.payload.doc.data()["nombre"],
            tipoVisita: e.payload.doc.data()["tipoVisita"],
      
          }
        })
      })
    } catch (error) {
      console.log("Error: en ver colonos");
    }
  }

  async getf(){
    try {
      this.refer = this.firestore.collection("definida", ref => ref.orderBy('nombre', 'asc'));
      this.refer.snapshotChanges().subscribe(data=>{
        this.datosd = data.map(e=>{
          return{
            id: e.payload.doc.id,
            nombre: e.payload.doc.data()["nombre"],
            tipoVisita: e.payload.doc.data()["tipoVisita"],
      
          }
        })
      })
    } catch (error) {
      console.log("Error: en ver colonos");
    }
  }

}
