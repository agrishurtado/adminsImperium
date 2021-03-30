import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directory-colonos',
  templateUrl: './directory-colonos.page.html',
  styleUrls: ['./directory-colonos.page.scss'],
})
export class DirectoryColonosPage implements OnInit {
datos:any;
refe:any;
  constructor(private firestore: AngularFirestore,
              private router:Router) { }

  ngOnInit() {
    this.get();
  }

  async get(){
    try {
      this.refe = this.firestore.collection("colono", ref => ref.orderBy('nombre', 'asc'));
      this.refe.snapshotChanges().subscribe(data=>{
        this.datos = data.map(e=>{
          return{
            id: e.payload.doc.id,
            nombre: e.payload.doc.data()["nombre"],
            domicilio: e.payload.doc.data()["domicilio"],
            telefono: e.payload.doc.data()["telefono"],
            tipoRegistro: e.payload.doc.data()["tipoRegistro"]
          }
        })
      })
    } catch (error) {
      console.log("Error: en ver colonos");
    }
  }

}
