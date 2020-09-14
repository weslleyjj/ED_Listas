import Pilha from "../Pilha";

// recebe: ()[][(([]))] retorna verdadeiro

export default function Questao6(pilha){
    let parenteses = 0;
    let cochetes = 0;
    
    for(let i = 0; i < pilha.size() ; i++){
        if(pilha.dados[i] == '('){
            parenteses++;
        }else if(pilha.dados[i] == '['){
            cochetes++;
        }else if(pilha.dados[i] == ')'){
            parenteses--;
        }else if(pilha.dados[i] == ']'){
            cochetes--;
        }
    }
    return parenteses === 0 && cochetes === 0;
}