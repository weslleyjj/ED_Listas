import Lista from "../Lista";

class Questao2{
    constructor(){
        this.dados = new Lista();
    }
    enqueue(dado){
        this.dados.add(dado);
    }
    dequeue(){
        return this.dados.removeEnd();
    }
    front(){
        return this.dados.last();
    }
    clear(){
        this.dados.clear();
    }
    size(){
        return this.dados.size();
    }
    isEmpty(){
        return this.dados.isEmpty();
    }
    toString(){
        return this.dados.toString();
    }

}

export default Questao2;