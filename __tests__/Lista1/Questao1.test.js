import Questao1 from "../../src/Lista1/Questao1";

let q;

beforeEach(() => {
    q = new Questao1();
});

test("instanciação", () => {
    q.numerador = 5;
    q.denominador = 10;
    expect(q.numerador).toBe(5);
    expect(q.denominador).toBe(10);
});

test("multiplicação", () => {
    let f1 = new Questao1(5, 10);
    let f2 = new Questao1(3, 7);
    q = q.multiplicar(f1, f2);
    expect(q.numerador).toBe(15);
    expect(q.denominador).toBe(70);
});

test("divisão", () => {
    let f1 = new Questao1(4, 3);
    let f2 = new Questao1(7, 5);
    q = q.dividir(f1, f2);
    expect(q.numerador).toBe(20);
    expect(q.denominador).toBe(21);
});