import Pilha from "../Pilha";

export default function Questao4(pilhaParaTroca){
    let aux = new Pilha();
    let topo, base;

    topo = pilhaParaTroca.pop();
    while(pilhaParaTroca.size() > 1){
        aux.push(pilhaParaTroca.pop());
    }
    base = pilhaParaTroca.pop();
    pilhaParaTroca.push(topo);
    while(aux.size() > 0){
        pilhaParaTroca.push(aux.pop());
    }
   
    pilhaParaTroca.push(base);
    return pilhaParaTroca;    
}