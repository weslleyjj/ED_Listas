import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";

class Conjunto {
	constructor() {
		this.dados = new ListaDuplamenteLigada();
	}

	add(dado) {
		if (!this.has(dado)) {
			this.dados.add(dado);
			return true;
		} else {
			return false;
		}
	}

	delete(dado) {
		return this.dados.remove(dado);
	}

	has(dado) {
		return this.dados.search(dado);
	}

	clear() {
		this.dados = new ListaDuplamenteLigada();
	}

	size() {
		return this.dados.size();
	}

	isEmpty() {
		return this.dados.isEmpty();
	}

	values() {
		return this.dados.asArray();
	}

	union(anotherset) {
		let unionset = new Conjunto();

		let arraydadosA = this.values();

		while (arraydadosA.length > 0) {
			unionset.add(arraydadosA.pop());
		}

		let arraydadosB = anotherset.values();

		while (arraydadosB.length > 0) {
			unionset.add(arraydadosB.pop());
		}
		return unionset;
	}

	intersection(anotherset) {
		let intersectionset = new Conjunto();

		let arraydadosA = this.values();
		let arraydadosB = anotherset.values();

		for (let i = 0; i < arraydadosA.length; i++) {
			for (let j = 0; j < arraydadosB.length; j++) {
				if (arraydadosA[i] === arraydadosB[j]) {
					intersectionset.add(arraydadosA[i]);
					break;
				}
			}
		}
		return intersectionset;
	}

	difference(anotherset) {
		let differenceset = new Conjunto();

		let arraydadosA = this.values();
		let arraydadosB = anotherset.values();

		for (let i = 0; i < arraydadosA.length; i++) {
			differenceset.add(arraydadosA[i]);
		}

		for (let i = 0; i < arraydadosB.length; i++) {
			differenceset.delete(arraydadosB[i]);
		}
		return differenceset;
	}

	isSubSet(anotherset) {
		let arraydadosA = this.values();
		let arraydadosB = anotherset.values();

		for (let i = 0; i < arraydadosB.length; i++) {
			let fazparte = false;
			for (let j = 0; j < arraydadosA.length; j++) {
				if (arraydadosB[i] === arraydadosA[j]) {
					fazparte = true;
				}
			}
			if (!fazparte) {
				return false;
			}
		}
		return true;
	}
}

export default Conjunto;
