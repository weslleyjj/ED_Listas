import Pilha from "../src/Lista_2/Questao1";

let p;

beforeEach(() => {
	p = new Pilha();
});

test("Instanciacao", () => {
	expect(p.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	p.push(5);
	expect(p.size()).toBe(1);
});

test("Teste de overflow", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	p.push(4);
	p.push(5);
	expect(p.pop()).toBe(5);
	expect(p.size()).toBe(4);
});
