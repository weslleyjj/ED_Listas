import Lista from "../Lista";

class Questao1{
    constructor(){
        this.dados = new Lista();
    }
    push(dado){
        this.dados.append(dado);
    }
    pop(){
        return this.dados.removeEnd();
    }
    top(){
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

export default Questao1;