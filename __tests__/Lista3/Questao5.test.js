import Lista from "../../src/Lista";
import Questao5 from "../../src/Lista3/Questao5";


test("colocar numeros em ordem aleatoria", () => {
    let l = new Lista();
    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    l.add(5);
    expect(l.toString()).toBe("5->4->3->2->1");
    l = Questao5(l);
    console.log(l.toString());
});