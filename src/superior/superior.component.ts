import { Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-superior',
    templateUrl: './superior.component.html',
    styleUrls: ['./superior.component.css']
})

export class SuperiorComponent implements OnInit{

   superior ={nome: 'manoel', idade: '46'};

ngOnInit(){}
}