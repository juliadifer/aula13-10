// Array
let nomes = ["Ana Paula", "Ana", "Ricardo Viera Santana", "Pedro", "Joana", "Evandro", "Ana Cassia"];

//push, pop, unshift e shift

//filter
//let nomePesquisa = prompt("Digite o nome a pesquisar:");

//let listaFiltrada = nomes.filter(nome =>
//nome.toLowerCase() === nomePesquisa.toUpperCase().trim()
//);


//console.log(listaFiltrada);

///let nomes = ["Miguel Angelo", "Maria Eduarda", "João Pedro", "Ana Clara", "Pedro Henrique", "Maria Alice,", "Luiz Felipe", "Ana Julia", "João Miguel", "Maria Cecilia"]
//let nomePesquisa = prompt("Digite um nome:")

//let listaFiltrada = nomes.filter(nome =>
    //nome.toUpperCase().includes(nomePesquisa.toUpperCase())
//);
//console.log(listaFiltrada)
//startWith()
//endWith()
//includes()

let num = [1, 2 , 3, 4, 5, 6 ,6, 7, 8 , 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let numero = Number(prompt("Digite um número:"))

let pares = num.filter(numero => numero % 2 === 0)

console.log(pares)