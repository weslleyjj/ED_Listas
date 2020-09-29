import Lista from "../Lista";

export default function Questao5(lista){
    let aux = new Lista();
    while(!lista.isEmpty()){
        aux.addAt(Math.floor((Math.random() * aux.size()) + 1), lista.removeEnd());
    }
    let mé = aux.removeBeginning();
    aux.addAt(Math.floor((Math.random() * aux.size()) + 1), mé);
    return aux;
}