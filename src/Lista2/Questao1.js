import Fila from "../Fila";

class Questao1{
    
    constructor(size = 5){
        this.fila1 = new Fila(size);
        this.fila2 = new Fila(size);
    }

    pop(){
        let cont = this.fila1.size();
        if(!this.fila1.isEmpty()){
            
            for(let i = 0; i < cont - 1 ; i++){
                this.fila2.enqueue(this.fila1.dequeue());
            }
        }else{
            throw new Error("Fila está vazia!");
        }
        cont = this.fila2.size();
        for(let i = 0; i < cont ; i++){
            this.fila1.enqueue(this.fila2.dequeue());
        }
        return this.fila1.dequeue();

    }

    push(dado){
        if(!this.fila1.isFull()){
            this.fila1.enqueue(dado);
        }else{
            throw new Error("Fila está cheia!");
        }        
    }
    size(){
        return this.fila1.size();
    }

    isEmpty(){
        return this.fila1.isEmpty();
    }

    isFull(){
        return this.fila1.isFull();
    }

    toString(){
        return this.fila1.toString();
    }
    top(){
        return this.fila1.dados[this.fila1.size()-1];
    }
}

export default Questao1;