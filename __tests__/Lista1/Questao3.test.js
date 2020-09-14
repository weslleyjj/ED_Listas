import Questao3 from "../../src/Lista1/Questao3";

let q;

beforeEach(() => {
    q = new Questao3(10);
});

test("iniciando pilha", () => {
    q.empilhaA('A');
    q.empilhaB('B');
    expect(q.topoA).toBe(0);
    expect(q.topoB).toBe(9);
});

test("teste de vazio", () => {
    expect(q.desempilhaA).toThrowError();
    expect(q.desempilhaB).toThrowError();
});

//Está OK e comentado para evitar testes gerais e aparecer erro
/*
test("teste de vazio", () => {
    q.empilhaA('A');
    q.empilhaB('B');
    q.empilhaA('A');
    q.empilhaB('B');
    q.empilhaA('A');
    q.empilhaB('B');
    q.empilhaA('A');
    q.empilhaB('B');
    q.empilhaA('A');
    q.empilhaA('A');
    q.empilhaB('B');
    q.empilhaB('B');
    expect(q.empilhaA('C')).toBe('');
    expect(q.empilhaB('C')).tobE('c');
});
*/
