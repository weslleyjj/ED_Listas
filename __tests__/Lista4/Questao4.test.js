import Questao1 from "../../src/Lista4/Questao4";
import Conjunto from "../../src/Conjunto";
import Questao4 from "../../src/Lista4/Questao4";

let jogo, apostador;

beforeEach(() => {
    jogo = new Conjunto();
    apostador = new Conjunto();
    jogo.add(22);
    jogo.add(12);
    jogo.add(56);
    jogo.add(45);
    jogo.add(31);
    jogo.add(41);
});

test("ganhador de Sena", () => {
    apostador.add(22);
    apostador.add(12);
    apostador.add(56);
    apostador.add(45);
    apostador.add(31);
    apostador.add(41);
    expect(Questao4(jogo, apostador)).toBe("Sena");
});

test("ganhador de Quina", () => {
    apostador.add(22);
    apostador.add(12);
    apostador.add(56);
    apostador.add(34);
    apostador.add(31);
    apostador.add(41);
    expect(Questao4(jogo, apostador)).toBe("Quina");
});

test("Não ganhou", () => {
    apostador.add(22);
    apostador.add(12);
    apostador.add(15);
    apostador.add(34);
    apostador.add(32);
    apostador.add(60);
    expect(Questao4(jogo, apostador)).toBe("Não fez nenhum jogo");
});



