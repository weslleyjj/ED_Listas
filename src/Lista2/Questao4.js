import Fila from "../Fila";

export default function Questao4(filaA, filaB){
    let filaresult = new Fila(filaA.size() + filaB.size());
    for(let i = 0; i < filaresult.maxSize;i++){
        if(i % 2 == 0){
            filaresult.enqueue(filaA.dequeue());
        }else{
            filaresult.enqueue(filaB.dequeue());
        }
    }
    console.log(filaresult);
    return filaresult;
}