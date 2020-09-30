import Questao7 from "../../src/Lista3/Questao7";

test("josephus problem", () => {
    expect(Questao7(3, 2)).toBe(3);
    expect(Questao7(16, 2)).toBe(1);
    expect(Questao7(13, 2)).toBe(11);
    expect(Questao7(10, 2)).toBe(5);
    expect(Questao7(9, 2)).toBe(3);
    expect(Questao7(10, 3)).toBe(4);
    expect(Questao7(14, 5)).toBe(11);
    expect(Questao7(15, 4)).toBe(13);
});