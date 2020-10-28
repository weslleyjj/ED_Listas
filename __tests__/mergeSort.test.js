import mergeSorting from "../src/P22-10/mergeSorting";

    let vetor;

beforeEach(() => {
    vetor = [];
});

test("Ordenação comum", () => {
    vetor.push(4);
    vetor.push(3);
    vetor.push(2);
    vetor.push(5);
    vetor.push(6);
    vetor.push(1);
    vetor.push(7);
    vetor = mergeSorting(vetor);
    expect(vetor.toString()).toBe("1,2,3,4,5,6,7");
});
test("Ordenação melhor caso", () => {
    vetor.push(1);
    vetor.push(2);
    vetor.push(3);
    vetor.push(4);
    vetor.push(5);
    vetor.push(6);
    vetor.push(7);
    vetor = mergeSorting(vetor);
    expect(vetor.toString()).toBe("1,2,3,4,5,6,7");
});
test("Ordenação pior caso", () => {
    vetor.push(7);
    vetor.push(6);
    vetor.push(5);
    vetor.push(4);
    vetor.push(3);
    vetor.push(2);
    vetor.push(1);
    vetor = mergeSorting(vetor);
    expect(vetor.toString()).toBe("1,2,3,4,5,6,7");
});