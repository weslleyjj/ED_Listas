class Questao1{

    constructor(numerador = 1, denominador = 1){
        this.numerador = numerador;
        this.denominador = denominador;
    }

    multiplicar(fracao1, fracao2){
        result = new Questao1();
        result.numerador = fracao1.numerador * fracao2.numerador;
        result.denominador = fracao1.denominador * fracao2.denominador;
        return result;
    }

    dividir(fracao1, fracao2){
        result = new Questao1();
        result.numerador = fracao1.numerador * fracao2.denominador;
        result.denominador = fracao1.denominador * fracao2.numerador;
        return result;
    }

}

export default Questao1;