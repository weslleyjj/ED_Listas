import TabelaHash from "../src/TabelaHash";

let tab;

beforeEach(() => {
    tab = new TabelaHash(10);
});

test("inserindo na tabela e removendo", () => {
    tab.inserir("tan", 8);
    tab.inserir("jojo", 6);
    tab.inserir("marquinho", 7);
    tab.inserir("toin", 9);
    tab.inserir("gugu", 5);
    expect(tab.remover("jojo")).toBe(6);
    expect(tab.remover("gugu")).toBe(5);
    expect(tab.remover("marquinho")).toBe(7);

});

test("inserindo na tabela e buscando", () => {
    tab.inserir("tan", 8);
    tab.inserir("jojo", 6);
    tab.inserir("marquinho", 7);
    tab.inserir("toi", 9);
    tab.inserir("gugu", 5);
    expect(tab.buscar("marquinho")).toBe(7);
    expect(tab.buscar("tan")).toBe(8);
    expect(tab.buscar("toi")).toBe(9);

});