import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild , Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Authors } from '../models/autores';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

 

  @ViewChild('autForm') authorsForm: NgForm

   constructor(private http: HttpClient){};

   titulo = "Autores de Livros";

   authors : Authors[];

 
  ngOnInit(): void {
  }

  onEnviar(){
    console.log("Enviando dados de autores ", this.authors.values);

  }

}
