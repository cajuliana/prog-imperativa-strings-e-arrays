// micro-desafio lista de compras 

//Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

let listaCompras = ['arroz', 'feijão', 'macarrão', 'molho de tomate'];

//join - separa os elementos usando um separador escolhido ou por vírgula quando vazio

let separadosPorVirgula = listaCompras.join();
console.log(separadosPorVirgula);

//pop - exclui o último elemento do array

let ultimoElemento = listaCompras.pop();
console.log(ultimoElemento);

// push - adiciona umou mais elementos ao final

listaCompras.push('batata');
console.log(listaCompras);

// shift - exclui o primeiro elemento do array

let primeiroElemento = listaCompras.shift();
console.log(primeiroElemento);


// unshift - adiciona um ou mais elementos no começo 

listaCompras.unshift('tapioca', 'queijo');
console.log(listaCompras);

console.log("-----------explicações---------")