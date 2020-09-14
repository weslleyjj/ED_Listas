import Questao1 from "../src/Lista1/Questao1";

let q;

beforeEach(() => {
    q = new Questao1();
});

test("instanciação", () => {
    q.numerador = 5;
    q.denominador = 10;
    expect(q.numerador);toBe(5);
    expect(q.denominador);toBe(10);
});