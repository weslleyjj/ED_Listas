class node{
    constructor(){
        this.dado = 0;
        this.chave = 0;
    }
}

//TODO: trocar a chave inteira por chave string

export default class TabelaHash{
    
    
    constructor(size = 10){
        this.dados = [];
        this.tam = size;
    }

    fazHash(chave){ //recebe string para formular a chave hash
        let hash = 0;
        //console.log(chave.length);
        for(let i=0;i<chave.length-1;i++){
            //console.log(parseInt(chave.charAt(i)));
            hash += chave.charCodeAt(i);            
        }
        //console.log(hash);
        hash = hash % 17;           
        //console.log(hash);
        return hash;
    }

    inserir(chave, dado){
        let info = new node()
        let chaveInt = this.fazHash(chave);
        info.chave = chaveInt;
        info.dado = dado;
        let flag = true;
        //console.log(info.chave);
        while(flag){
            if(this.dados[info.chave] == null || this.dados[info.chave] == undefined){
                this.dados[info.chave] = info;
                this.dados[info.chave].chave = chaveInt;
                flag = false;
            }else if(info.chave > this.tam - 1){
                info.chave = 0;
            }else{
                info.chave++;
            }
        }
    }

    buscar(chave){
        let dado = 0;
        let info = new node();
        info.chave = this.fazHash(chave);
        while(dado == 0){
            if(this.dados[info.chave].chave == info.chave){
                dado = this.dados[info.chave].dado;
            }else{
                info.chave++;
            }
            if(info.chave >= this.tam){
                return -1; // significa que não encontrou
            }
        }
        return dado;
    }

    remover(chave){
        let dado;
        let info = new node();
        let chaveInt = this.fazHash(chave);
        let volta = false;
        let achou = false;
        info.chave = chaveInt;
        while(!achou){
            if(this.dados[info.chave] != null || this.dados[info.chave] != undefined){
                if(this.dados[info.chave].chave == chaveInt){
                    dado = this.dados[info.chave].dado;
                    this.dados[info.chave] = null;
                    achou = true;
                }else{
                    info.chave++;
                }
            }else{
                info.chave++;
            }
            if(info.chave >= this.tam){
                info.chave = 0;
                volta = true;
            }
            if(info.chave >= this.tam && volta){
                throw new Error("registro não encontrado");
            }
        }
        return dado;
    }

    
}