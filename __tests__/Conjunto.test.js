import Conjunto from "../src/Conjunto";

let c;

beforeEach(() => {
	c = new Conjunto();
});

test("Instanciacao", () => {
	expect(c.size()).toBe(0);
	expect(c.isEmpty()).toBe(true);
});

test("Adição de um elemento", () => {
	c.add("A");
	expect(c.size()).toBe(1);
	expect(c.add("A")).toBe(false);
	c.add("B");
	expect(c.size()).toBe(2);
	c.add("C");
	expect(c.size()).toBe(3);
	c.delete("A");
	expect(c.size()).toBe(2);
	expect(c.values()).toStrictEqual(['C', 'B']);
	expect(c.delete('F')).toBe(false);
});