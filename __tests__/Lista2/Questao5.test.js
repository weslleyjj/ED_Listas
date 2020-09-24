import Questao5 from "../../src/Lista2/Questao5";

let q;

beforeEach(() => {
    q = new Questao5();
});

test("inserir dos dois lados e o to string", () => {
    q.enqueueA(1);
    q.enqueueA(2);
    q.enqueueA(3);
    q.enqueueA(4);
    q.enqueueB(10);
    q.enqueueB(11);
    q.enqueueB(12);
    expect(q.toString()).toBe("[1, 2, 3, 4, undefined, undefined, undefined, undefined, 12, 11, 10, ]");
});

test("inserir dos dois lados e remover", () => {
    q.enqueueA(1);
    q.enqueueA(2);
    q.enqueueA(3);
    q.enqueueB(10);
    q.enqueueB(11);
    q.enqueueB(12);
    let removidos = [];
    removidos[0] = q.dequeueA();
    removidos[1] = q.dequeueB();
    expect(removidos.toString()).toBe("1,10");
    removidos[2] = q.dequeueA();
    removidos[3] = q.dequeueB();
    expect(removidos.toString()).toBe("1,10,2,11");
});

