import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-inferior',
    templateUrl: './inferior.component.html',
    styleUrls:['./inferior.component.css']
})

export class InferiorComponent implements OnInit{

    @Input('catraca') dados: {nome : string, idade: string};

 ngOnInit()
 {}
}