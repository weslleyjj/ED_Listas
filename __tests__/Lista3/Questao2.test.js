import Questao2 from "../../src/Lista3/Questao2";

let q;

beforeEach(() => {
    q = new Questao2();
});

test("Inserção e frente", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.front()).toBe(1);

});

test("Inserção e dequeue", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.dequeue()).toBe(1);

});

test("Inserção e ordem", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.toString()).toBe("4->3->2->1");

});