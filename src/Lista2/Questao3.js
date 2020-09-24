/*
Sistema de fila
Tamanho máximo de caminhões por dia: 10
novo dia = limpar fila
quando o caminhão sair da fila, remover logicamente o caminhão para n liberar novas posições
Implementar:
- entrarCaminhao(caminhao)
- dispensarCaminhao()
- verificaCaminhoes() // retornar quantos caminhões há na fila para serem dispensados
- verificarCarregamentos() // retornar quantos caminhoes ja foram carregados e se atingiu a meta
- listaCaminhoes() // exibir relatorio dos caminhoes daquele dia
*/

class Questao3{
    constructor(){
        this.caminhoes = [];
        this.inicio = 0;
        this.fim = 0;
        this.maxSize = 10;
    }
    entrarCaminhao(caminhao){
        if(this.inicio < this.maxSize){
            this.caminhoes[this.fim] = caminhao;
            this.fim++;
        }else{
            throw Error("Limite de caminhoes atingido!");
        }
    }
    dispensarCaminhao(){
        let res = this.caminhoes[this.inicio];
        this.inicio++;
        return res;
    }
    verificaCaminhoes(){
        return Math.abs(this.inicio - this.fim);
    }
    verificaCarregamentos(){
        return this.inicio;
    }
    listaCaminhoes(){
        let relatorio = "";
        
        for(let i = 0 ; i < this.maxSize ; i++){
            relatorio += "\n";
            relatorio += i + 1 + " - " + this.caminhoes[i];
        }
        return relatorio;
    }
}

export default Questao3;