import Lista from "../Lista";

export default function Questao7(qtd, num){ //qtd = quantidade de pessoas, num = número de contagem para morte
    let matadouro = new Lista();
    let cont = 1;
    while(matadouro.size() < qtd){
        matadouro.append(cont)
        cont++;
    }
    cont = 1;
    let aux;
    while(matadouro.size() > 1){
        if(cont == num){
            matadouro.removeBeginning();
            cont = 0;
        }else{
            aux = matadouro.removeBeginning();
            matadouro.append(aux);
        }
        cont++;
        //console.log(matadouro.toString()); ative para ver os passos de cada etapa da roda
    }
    return matadouro.removeBeginning();
}