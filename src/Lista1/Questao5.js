import Pilha from "../Pilha";
import Questao2 from "./Questao2";

export default function Questao5(numero){
    let binario = new Pilha();
    while(numero >= 1){
        binario.push(Math.floor(numero%2));
        numero/=2;
    }
    binario = Questao2(binario);
    return binario;
}