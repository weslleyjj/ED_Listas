import Lista from "../Lista";

class pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Questao8{
    constructor(){
        this.dados = new Lista();
    }

    add(pessoa){
        this.dados.append(pessoa);
    }

    ordemNome(){
               
    }
    ordemIdade(){}
}

export default Questao8;