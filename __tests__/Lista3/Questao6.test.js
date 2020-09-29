import Lista from "../../src/Lista";
import Questao6 from "../../src/Lista3/Questao6";


test("função substring", () => {
    let l = new Lista();
    let substr = new Lista();
    l.add('B');
    l.add('A');
    l.add('N');
    l.add('A');
    l.add('N');
    l.add('A');
    expect(l.toString()).toBe("A->N->A->N->A->B");
    substr = Questao6(l, 1, 4);
    expect(substr.toString()).toBe("N->A->N");
});