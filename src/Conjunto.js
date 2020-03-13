import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";


/**
 * Conjunto implementado apartir de uma Lista Duplamente Ligada (LDL)
 * @author {https://github.com/taniro}
 */


class Conjunto {

	/**
	 * Construtor padrão de um Conjunto utilizando uma LDL
	 */
	constructor() {
		this.dados = new ListaDuplamenteLigada();
	}

	/**
	 * Tenta inserir um novo dado no conjunto
	 * @param {any} [dado] - Novo dado a ser inserido no Conjunto
	 * @returns {boolean} - Retorna [true] caso o dado tenha sido inserido, e [false] caso não tenha sido 
	 */
	add(dado) {
		if (!this.has(dado)) {
			this.dados.add(dado);
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Remove um dado específico do conjunto
	 * @param {any} [dado] - Dado removido do conjunto
	 * @returns {any} - Dado removido
	 */
	delete(dado) {
		return this.dados.remove(dado);
	}

	/**
	 * Verifica se o conjunto tem ou não um dado específico
	 * @param {any} [dado] - Dado que será procurado
	 * @returns {boolean} - Retornará [true] caso o dado esteja no conjunto, e [false] caso não exista 
	 */
	has(dado) {
		return this.dados.search(dado);
	}

	/**
	 * Limpa todo o conjunto
	 */
	clear() {
		this.dados = new ListaDuplamenteLigada();
	}

	/**
	 * Tamanho do conjunto
	 * @returns {number} - Tamanho do conjunto
	 */
	size() {
		return this.dados.size();
	}

	/**
	 * Verifica se o Conjunto está vazio ou não
	 * @returns {boolean} - Retorna [true] caso o conjunto esteja vazio, e [false] se ele não estiver
	 */
	isEmpty() {
		return this.dados.isEmpty();
	}

	/**
	 * Mostra todos os dados que existem no conjunto
	 * @returns {any} - Dados existente no conjunto na formatação de array
	 */
	values() {
		return this.dados.asArray();
	}

	/**
	 * União de valores de dois conjuntos diferentes
	 * @param {any} [anotherset] - Conjunto que queira unir
	 * @returns {any} - Uma união de valores de dois Conjuntos diferentes 
	 */
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

	/**
	 * Interseção de dois Conjuntos diferentes, ou seja, dados que sejam iguais nos dois Conjuntos.
	 * @param {any} [anotherset] - Conjunto que queira intersedir
	 * @returns {any} - A interseção de dois conjuntos diferentes
	 */
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

	/**
	 * Diferença entre dois Conjuntos diferentes
	 * @param {any} [anotherset] - Conjunto que queira saber a diferença
	 * @returns {any} - A os dados que distintos entre os conjuntos
	 */
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

	/**
	 * Verifica se um Conjunto é pertence a um outro Conjunto
	 * @param {any} [anotherset] - Conjunto que será verificado 
	 * @returns {boolean} - Retorna [true] caso o conjunto seja um elemento do outro conjunto
	 */
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
