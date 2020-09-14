import Questao5 from "../../src/Lista1/Questao5";
import Pilha from "../../src/Pilha";

test("Conversor pra binário", () => {
    let binario = new Pilha();
    binario = Questao5(25);
    expect(binario.toString()).toBe("[ 1  1  0  0  1 ]");
});

test("Conversor pra binário 2", () => {
    let binario = new Pilha();
    binario = Questao5(255);
    expect(binario.toString()).toBe("[ 1  1  1  1  1  1  1  1 ]");
});