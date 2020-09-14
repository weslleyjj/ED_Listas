import Questao6 from "../../src/Lista1/Questao6";
import Pilha from "../../src/Pilha";

let p;

beforeEach(()=>{
    p = new Pilha();
});

test("Teste de sequencia 1", () => {
    p.push('(');
    p.push(')');
    p.push('(');
    p.push('[');
    p.push('(');
    p.push(')');
    p.push(']');
    p.push(')');
    p.push('(');
    p.push(')');
    expect(Questao6(p)).toBe(true);
});

test("Teste de sequencia 2", () => {
    p.push('(');
    p.push(')');
    p.push('(');
    p.push('[');
    p.push('[');
    p.push(')');
    p.push(']');
    p.push(')');
    expect(Questao6(p)).toBe(false);
});

test("Teste de sequencia 3", () => {
    p.push('(');
    p.push(')');
    p.push('[');
    p.push(']');
    p.push('(');
    expect(Questao6(p)).toBe(false);
});


