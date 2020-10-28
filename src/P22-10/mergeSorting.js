export default function mergeSorting(vetor){
    let D, E;
    if(vetor.length > 1){ // 1
        let meio = Math.floor(vetor.length/2); //2
        E = vetor.slice(0, meio); // 1*v (v = metade esquerda do vetor)
        D = vetor.slice(meio);   //  1*s (s = metade direita do vetor)   
    }else{
        return vetor;
    }
    return merge(mergeSorting(D),mergeSorting(E)); //3 + 7*(M*l)+ E-e + D-d
}

function merge(D, E){
    let vetorResult = []; 
    let d = 0, e = 0; // 2
    while(d < D.length && e < E.length){ // * E.length || D.length
        if(E[e] < D[d]){ // 1
            vetorResult.push(E[e]); // 2
            e++; // 1
        }else{
            vetorResult.push(D[d]) // 2
            d++; // 1
        }
    }
    return vetorResult.concat(E.slice(e)).concat(D.slice(d)); // 1*E-e + 1*D - d
}

