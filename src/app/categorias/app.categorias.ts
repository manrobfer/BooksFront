import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";


import { Categorias } from "../models/categorias";

@Component({
    selector: 'app-categorias',
    templateUrl: './app.categorias.html',
    styleUrls: ['./app.categorias.css']
})

export class CategoriasComponent implements OnInit {
    
    
       
    @ViewChild('catForm') categories: NgForm; 

    constructor (private http: HttpClient){}
    
    buttonType: any;

    titulo = "Categoria de Livro";

    categorias: Categorias[];

    enviado = false;   

   
    ngOnInit(): void {}
        
    onEnviar(buttonType: any): void {

           if(buttonType === "salvar"){
                           
                  this.http.post('http://localhost:8082/categoria/salvar',this.categories.value)
                           .subscribe(responseData => {
                            console.log(responseData);
                            }) }
          
           if(buttonType === "consultar"){   

                  this.http.get('http://localhost:8082/categoria/consultar')
                           .subscribe((categories: Categorias[]) =>{
                            console.log(categories);
                            this.categorias = categories;                            
                     } 
                  )}
            if(buttonType === "limpar"){
                   
                  this.categorias = null;
            }      
            }            
      
}