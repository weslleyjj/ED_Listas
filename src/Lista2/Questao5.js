
class Questao5 {

	
	constructor(size = 10) {
		this.dados = [];
		this.fimA = 0;
        this.inicioA = 0;
        this.fimB = size;
		this.inicioB = size;
		this.maxSize = size;
	}

	
	enqueueA(newData) {
		if (this.isFull()) {
			throw new Error("Queue is full");
		} else {
			this.dados[this.fimA++] = newData;
		}
	}

	
	dequeueA() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicioA++];
		}
	}

	frontA() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicioA];
		}
	}
	enqueueB(newData) {
		if (this.isFull()) {
			throw new Error("Queue is full");
		} else {
			this.dados[this.fimB--] = newData;
		}
	}

	
	dequeueB() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicioB--];
		}
	}

	frontB() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicioB];
		}
	}

	
	clear() {
        this.inicioA = this.fimA;
        this.inicioB = this.maxSize;        
	}

	
	toString() {
		let resultado = "["

		for (let i = 0; i < this.fimA + this.fimB; i++) {
			resultado += `${this.dados[i]}, `;
		}

		resultado += "]"

		return resultado;
	}

	isEmpty() {
		return this.inicioA === this.fimA && this.inicioB === this.fimB;
	}

	
	isFull() {
		return (this.fimA - this.inicioA) === this.maxSize && (this.fimB - this.inicioB) === this.maxSize
	}
}

export default Questao5;