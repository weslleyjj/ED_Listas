# Estruturas de Dados
Projeto base para as aulas de estruturas de dados

Utilize esse repositório se não quiser configurar um novo.

Caso deseje criar um repositório do zero siga os seguintes passos:

1) npx gitignore node
2) npm init -y
3) git init
4) npm install --save-dev jest
5) npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/plugin-proposal-class-properties
6) Crie o arquivo babel.config.js
7) Adicione as informações abaixo no arquivo abel.config.js
```
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
	plugins: ["@babel/plugin-proposal-class-properties"]
};
```
8)Para executar os testes digite npm test
