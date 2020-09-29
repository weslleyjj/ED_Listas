import Lista from "../Lista";

export default function Questao4(lista){
    let aux = new Lista();
    while(!lista.isEmpty()){
        aux.append(lista.removeEnd());
    }
    return aux;
}