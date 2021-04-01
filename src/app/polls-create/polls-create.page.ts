import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polls-create',
  templateUrl: './polls-create.page.html',
  styleUrls: ['./polls-create.page.scss'],
})
export class PollsCreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vermas(parrafo,boton){
    document.getElementById(parrafo).style.display
    if(document.getElementById(parrafo).style.display=='enable'){
      document.getElementById(parrafo).style.display=='disable';
      document.getElementById(boton).innerHTML=='Ver mas';
    }else{
      document.getElementById(parrafo).style.display=='enable';
      document.getElementById(boton).innerHTML=='ocultar';
    }
  }

}
