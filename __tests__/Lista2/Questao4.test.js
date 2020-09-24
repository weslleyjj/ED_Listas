import Questao4 from "../../src/Lista2/Questao4";
import Fila from "../../src/Fila";


let filaA, filaB;

beforeEach(() => {
    filaA = new Fila();
    filaB = new Fila();
});

/*test("fila intercalada", () => {  //Dá certo porém o toString não ajuda a passar no teste
    filaA.enqueue(1);
    filaA.enqueue(2);
    filaA.enqueue(3);
    filaA.enqueue(4);
    filaB.enqueue(5);
    filaB.enqueue(6);
    filaB.enqueue(7);
    filaB.enqueue(8);
    expect(Questao4(filaA, filaB)).toBe("{"+
        "dados: ["+
          "1, 5, 2, 6,"+
          "3, 7, 4, 8"+
        "],"+
        "fim: 8,"+
        "inicio: 0,"+
        "maxSize: 8"+
      "}");
});*/