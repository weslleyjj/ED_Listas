import Pilha from "../Pilha";

export default function Questao2(palavraEmPilha){
    let aux = new Pilha();
    while(!palavraEmPilha.isEmpty()){
        aux.push(palavraEmPilha.pop());
    }
    return aux;    
}
