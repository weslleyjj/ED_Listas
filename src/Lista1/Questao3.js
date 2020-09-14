class Questao3{

    constructor(size = 10){
        this.maxSize = size;
		this.dados = [];
        this.topoA = -1;
        this.topoB = this.maxSize;
    }

    empilhaA(dado){

        if(!this.isFull())
            this.dados[++this.topoA] = dado;
        else
            throw new Error("A pilha está Cheia!");
    }

    empilhaB(dado){

        if(!this.isFull())
            this.dados[--this.topoB] = dado;
        else
            throw new Error("A pilha está Cheia!");
        
    }

    desempilhaA(){
        if(!this.isEmptyA())
        return this.dados[this.topoA--];
        else
            throw new Error(); //A pilha A está Vazia!
        
    }

    desempilhaB(){

        if(!this.isEmptyB())
            return this.dados[this.topoB++];
        else
            throw new Error(); //A pilha B está Vazia!
    }

    isEmptyA(){
        return this.topoA === -1;
    }

    isEmptyB(){
        return this.topoB === this.maxSize;
    }

    isFull(){
        return this.topoA === this.topoB;
    }

}

export default Questao3;