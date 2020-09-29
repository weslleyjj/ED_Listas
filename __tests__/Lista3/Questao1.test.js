import Questao1 from "../../src/Lista3/Questao1";

let q;

beforeEach(() => {
    q = new Questao1();
});

test("Inserção e topo", () => {
    q.push(1);
    q.push(2);
    q.push(3);
    q.push(4);
    expect(q.top()).toBe(4);
});

test("Inserção e remoção", () => {
    q.push(1);
    q.push(2);
    q.push(3);
    q.push(4);
    expect(q.pop()).toBe(4);
});
