import Questao4 from "../../src/Lista1/Questao4";
import Pilha from "../../src/Pilha";

test("Trocar Base pelo topo", () => {
    let q = new Pilha();
    q.push('A');
    q.push('B');
    q.push('C');
    q.push('D');
    q.push('E');
    q = Questao4(q);
    expect(q.toString()).toBe("[ E  B  C  D  A ]");
});