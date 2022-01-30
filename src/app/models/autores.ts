export class Authors {
    private codigo: String;
    private nome: String;
    private datanasc: String;
    private nacionalidade: String;

    constructor( codigo: String, nome: String,datanasc: String,nacionalidade: String){
        
        this.codigo = codigo;
        this.nome = nome;
        this.datanasc = datanasc;
        this.nacionalidade=nacionalidade;
    }


}