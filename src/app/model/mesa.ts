export class Mesa{
    public status: boolean ;
    public valorTotal:number;
    public valorIten:number;
    public descricaoMesa:string;
    public idMesa:number;
    public dataCriacao:Date;
    public encerrarMesa:boolean = false;

    constructor(public numeroMesa: any ){
        this.numeroMesa = numeroMesa;
        this.descricaoMesa = "Mesa " + this.numeroMesa;
        this.status = false;
        this.dataCriacao= new Date();
        this.idMesa = numeroMesa;
        this.valorTotal = 0.00;
        this.valorIten = 0.00 ;
        console.log("Mesa Criada:" + this.idMesa + " " + this.dataCriacao + " " + this.descricaoMesa );
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