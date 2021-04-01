import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {enableProdMode} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';



@Component({
  selector: 'app-market-performed',
  templateUrl: './market-performed.page.html',
  styleUrls: ['./market-performed.page.scss'],
})
export class MarketPerformedPage implements OnInit {
  refe:any;
  datos:any;
  id:any;
  constructor(private firestore: AngularFirestore,
    private router:Router, 
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
    this.get();
  }

  async get(){
    try {
      this.refe = this.firestore.collection("market", ref => ref.orderBy('fecha', 'asc'));
      this.refe.snapshotChanges().subscribe(data=>{
        this.datos = data.map(e=>{
          return{
            id: e.payload.doc.id,
            nombre: e.payload.doc.data()["nombre"],
            precio: e.payload.doc.data()["precio"],
            telefono: e.payload.doc.data()["telefono"],
            producto: e.payload.doc.data()["producto"],
            descripcion: e.payload.doc.data()["descripcion"],
            imag: e.payload.doc.data()["imag"],
            fecha: e.payload.doc.data()["fecha"]



          }
        })
      })
    } catch (error) {
      console.log("Error: en ver colonos");
    }
  }

  async deletePost(id: string) { 
    await this.firestore.doc("market/" + id).delete();    
  }

  getImgContent(imgFile:string): SafeUrl {
    enableProdMode();
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }

}
