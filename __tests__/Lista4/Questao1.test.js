import Questao1 from "../../src/Lista4/Questao1";

let q;

beforeEach(() => {
    q = new Questao1();
});

test("inserção de elementos", () => {
    q.add("A",10);
    q.add("B",8);
    q.add("C",6);
    q.add("D",4);
    q.add("E",2);
    expect(q.remove()).toBe(2);
});