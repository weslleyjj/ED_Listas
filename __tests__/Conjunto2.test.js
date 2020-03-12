import Conjunto from "../src/Conjunto";

let c1, c2;

beforeEach(() => {

	c1 = new Conjunto()

	c1.add("A");
	c1.add("B");
	c1.add("C");

	c2 = new Conjunto();

	c2.add("C");
	c2.add("D");
	c2.add("E");
});


test("union", () => {
	let c3 = c1.union(c2);
	expect(c1.values()).toStrictEqual(['C', 'B', 'A']);
	expect(c2.values()).toStrictEqual(['E', 'D', 'C']);
	expect(c3.values()).toStrictEqual(['E', 'D', 'C', 'B', 'A']);

});

test("intersection", () => {
	let c3 = c1.intersection(c2);
	expect(c3.values()).toStrictEqual(['C']);
});

test("difference", () => {
	let c3 = c1.difference(c2);
	expect(c3.values()).toStrictEqual(['A', 'B']);
});

test("isSubset", () => {
	expect(c1.isSubSet(c2)).toBe(false);
});

test("isSubset2", () => {

	let c3 = new Conjunto();

	c3.add("A");
	c3.add("B");

	expect(c1.isSubSet(c3)).toBe(true);
});

test("union com vazio", () => {

	let c3 = c1.union(new Conjunto());
	expect(c3.values()).toStrictEqual(['C', 'B', 'A']);

});

test("intersection com vazio", () => {

	let c3 = c1.intersection(new Conjunto());
	expect(c3.values()).toStrictEqual([]);

});

test("diferença com vazio", () => {

	let c3 = c1.difference(new Conjunto());
	expect(c3.values()).toStrictEqual(['A', 'B', 'C']);

});

test("issubset com vazio", () => {

	expect(c1.isSubSet(new Conjunto())).toBe(true);
});

