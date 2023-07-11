/* 
TIPOS DE DADOS...

1. Strings -> Textos. (Com a "crase" posso pular de linhas, com as "ampas" NÃO).
2. Numbens -> Números. (Na Programação Mais é +, Vezes é *, Menos é -, Dividir é / ).
3. Boolean -> Boleano. (Boolean prega que tudo é 0 e 1, afinal é isso que os computadores entendem ).
4. Object -> Objetos. (Podemos colocar objetosdentro de outros objetos unando as {} ).
5. Null & Undefened. ( São a ausência de algum dado ou informação ).

ESTRUTURA DE DADOS

1. Array (Ou tbm chamado, Vetor -> Matriz). (Posso colocar o que eu quiser dentro da array,
    [20, "Strings", {Objetos}])
*/

const myArray = [20, 40,'Olá JS', { name: 'Mayara', age: 25}]
//Posso colocar o que eu quiser dentro do array separados por , cada , é uma posição do array.

/*const users = [
    {
        nome: "Mayara",
        idade: 25,
        nomeDoConjuge: "Andrei",
        id: null,
    },
    {
        nome: "Andrei",
        idade: 25,
        nomeDoConjuge: "Mayara",
        id: null,
    },
] 
*/

const users = [20, 40, 480]

console.log(users[2])
//Para achar a posição do array, começa a contar do 0.

/*
COMO ALTERAR UM ITEM DO ARRAY OU DE UM OBJETO NO CONST?
(Porém não consigo alterar users inteiros!)

const users = [20, 40, 480]

users [2] = 500

console.log(users)
resultado: [20, 40, 500]
*/

/* 
COMO ALTERAR UM OBJETO DO ARRAY NO CONST?

const users = [
    { name: 'Mayara', age: 25 },
    { name: 'Moreira', age: 30 },
]

users[1].name = 'Andrei' (Assim mudará o nome 'Moreira' para 'Andrei').

console.log(users)

TAMBÉM POSSO ACESSAR MEU ARRAY EXATAMENTE NA POSIÇÃO QUE EU QUERO...

console.log(users[1].age) (Ele irá mostrar apenas o age )

*/

const texto1 = "textos com 'aspas'  duplas"
const texto2 = 'textos com "aspas" simples'
const texto3 = `textos "com" a crase` // Também chamada de Template literals ou Template String.

console.log(texto1)
console.log(texto2)
console.log(texto3)

const myAge = 25
const myCar = 'Camry'

const myString = `Minha idade é ${myAge}, to ficando velha.
Mas pelo menos estou andando de ${myCar}.` 
//Se eu colocar 10 + 15 dentro do ${} ele faz aconta automaticamente.
//Possso colocar quantas variáveis eu quiser dentro de um texto.
console.log(myString) 
//Colocando o ${} dentro do ``, vai entender que o JS está dentro do texto.

const number1 = 1234 // (Ou posso colocar números fracionados 4.7 Não pode ter , )
//Posso colocar quantos números eu quiser. Número NÃO precisa de aspas, apenas textos.
//Também podemos por + - / *.
const number2 = 44 / 2 //Sem aspas ele soma.
const fakeNumber = "44 / 2" //Com aspas vera texto.

console.log(number2)
console.log(fakeNumber)

true //Verdadeiro.
false //Falso.

// Ex: Se alguem for preencher algo, e ela deixa um campo sem preencher, isso é "false"
// Se ela preencher, isso é "true". 
//Podemos perguntar ao JS se um número é maior que outro, ele irá responder com "true" ou "false".

const name = "Mayara"
const age = 25
const address = "Rua dos Bobos, núnero Zero"
//em vez de colocar uma por uma, podemos por todos dentro do objeto.
//podemos por objeto dentro de outros objetos.
const mayara = {
    name: "Mayara",
    age: 25,
    address: {
        street: "Dos Bobos",
        number: 0,
        city: "São Paulo",
        state: "SP",
        country: "Brasil",
    }
}

mayara.address.number = 1 //const permite mudanças quanto a itens pequenos, objeto dentro de outro.

console.log(mayara.address.number) //procurar um objeto dentrode outro.

const user = {
    nome: "Mayara",
    idade: 25,
    nomeDoConjuge: "Andrei",
    id: null
}
console.log(user.id) //se eu colocar user."salada", vai aparecer undefined, pq n tem essa palavra no código.

