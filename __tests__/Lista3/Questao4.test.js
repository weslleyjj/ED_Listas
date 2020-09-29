import Lista from "../../src/Lista";
import Questao4 from "../../src/Lista3/Questao4";


test("inverter lista", () => {
    let l = new Lista();
    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    l.add(5);
    expect(l.toString()).toBe("5->4->3->2->1");
    l = Questao4(l);
    expect(l.toString()).toBe("1->2->3->4->5");
});