export default function Questao4(jogo, aposta){
    if(jogo.intersection(aposta).size() == 5){
        return "Quina";
    }else if(jogo.intersection(aposta).size() == 6){
        return "Sena";
    }else{
        return "Não fez nenhum jogo";
    }
}