// 001: Exiba "Olá, Mundo!" no console.
console.log('Olá, Mundo!')

// 002: Crie uma variável para seu nome e exiba no console.
let nome = 'Paulo';
console.log(nome)

// 003: Some dois números e mostre o resultado.
let num1 = 5;
let num2 = 10;
let soma = (num1 + num2);
console.log(`A soma de ${num1} + ${num2} é ${soma}`);

// 004: Peça dois números ao usuário (prompt) e mostre a soma (alert).
let numero1 = parseFloat(prompt("Digite o primeiro número: ")) // No Python utilizamos o Float apenas, em JS acrescentamos o parseFloat
let numero2 = parseFloat(prompt("Digite o segundo número: ")) 
let adicao = (numero1 + numero2);
alert(`A soma de ${numero1} + ${numero2} é ${adicao}`)

// 005: Calcule a média de 3 notas.
let nota1 = parseFloat(prompt("Digite a Nota 1: "))
let nota2 = parseFloat(prompt("Digite a Nota 2: "))
let nota3 = parseFloat(prompt("Digite a Nota 3: "))
let media = (nota1 + nota2 + nota3) / 3;
alert(`A Média das notas é de ${media}`)

// 006: Verifique se um número é maior que 10.
let number = 5

// 007: Verifique se um número é par ou ímpar.
let num1 = parseInt(prompt("Digite o Número: "));
if (num1 % 2 == 0) {
    console.log("O Número é PAR!")
} else {
    console.log("O Número é ÍMPAR!")
}

// 008: Crie um contador de 1 a 10 usando loop For.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 09 