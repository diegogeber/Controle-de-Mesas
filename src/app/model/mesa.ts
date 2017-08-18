export class Mesa{
    public status: boolean ;
    public valorTotal:number;
    public valorIten:number;
    public descricaoMesa:string;

    constructor(public numeroMesa: any ){
        this.numeroMesa = numeroMesa;
        this.descricaoMesa = "Mesa " + this.numeroMesa;
        this.status = false;
    }
        
    public addItem(valorIten){
        this.valorTotal += valorIten;
    }

    getStatus(){
        if(this.status){
            return "Ocupada"
        }else{
            return "Disponível"
        }
    } 

    mudaStatus(){
        if(this.status){
            this.status = false;
        }else{
            this.status = true;
        }
    }

}