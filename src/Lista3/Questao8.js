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
        let aux = new Lista();
        let aux_a = this.dados.head;
        let aux_b = this.dados.head.proximo;
        aux.add(this.dados.removeEnd());
        let aux_c = aux.dados.head.proximo;
		while (aux_b != null) {
			if (aux_b.dado < aux_c.dado) {
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
				return;
			}
			aux_a = aux_b;
			aux_b = aux_b.proximo;
		}        
    }
    ordemIdade(){}
}

export default Questao8;