import Questao2 from "../../src/Lista1/Questao2";
import Pilha from "../../src/Pilha";

let q;

beforeEach(() => {
    q = new Pilha();
});

test("Inverter", () => {
    q.push('A');
    q.push('B');
    q.push('A');
    q.push('C');
    q.push('A');
    q.push('X');
    q.push('I');    
    q = Questao2(q);
    expect(q.toString()).toBe("[ I  X  A  C  A  B  A ]");
});