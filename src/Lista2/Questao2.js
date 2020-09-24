import Pilha from "../Pilha";

class Questao2{
    constructor(size = 5){
        this.pilha1 = new Pilha(size);
        this.pilha2 = new Pilha(size);
    }
    enqueue(dado){
        if(!this.isFull()){
            this.pilha1.push(dado);
        }else{
            throw new Error("Fila cheia!");
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            var cont = this.pilha1.size();
            for(let i = 0; i < cont - 1; i++){
                this.pilha2.push(this.pilha1.pop());
            }
        }else{
            throw new Error("Fila vazia!");
        }
        let res = this.pilha1.pop();
        cont = this.pilha2.size();
        for(let i = 0; i < cont ; i++){
            this.pilha1.push(this.pilha2.pop());
        }
        return res;

    }
    front(){

        if(!this.isEmpty()){
            let cont = this.pilha1.size();
            for(let i = 0; i < cont - 1; i++){
                this.pilha2.push(this.pilha1.pop());
            }
            let res = this.pilha1.top();
            cont = this.pilha2.size();
            for(let i = 0; i < cont ; i++){
                this.pilha1.push(this.pilha2.pop());
            }
            return res;
        }else{
            throw new Error("Fila vazia!");
        }
        
    }
    clear(){
        this.pilha1.clear();
    }
    toString(){
        return this.pilha1.toString();
    }
    size(){
        return this.pilha1.size();
    }
    isEmpty(){
        return this.pilha1.isEmpty();
    }
    isFull(){
        return this.pilha1.isFull();
    }
}

export default Questao2;