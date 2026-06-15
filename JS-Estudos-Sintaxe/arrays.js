// ███████ ███████ ████████ ██    ██ ██████   ██████  ███████
// ██      ██         ██    ██    ██ ██   ██ ██    ██ ██
// █████   ███████    ██    ██    ██ ██   ██ ██    ██ ███████
// ██           ██    ██    ██    ██ ██   ██ ██    ██      ██
// ███████ ███████    ██     ██████  ██████   ██████  ███████

// ██████  ███████     ██       ██████   ██████  ██  ██████   █████
// ██   ██ ██          ██      ██    ██ ██       ██ ██      ██   ██
// ██   ██ █████       ██      ██    ██ ██   ███ ██ ██      ███████
// ██   ██ ██          ██      ██    ██ ██    ██ ██ ██      ██   ██
// ██████  ███████     ███████  ██████   ██████  ██  ██████  ██   ██

// ███████ ██ ███    ██ ████████  █████  ██   ██ ███████
// ██      ██ ████   ██    ██    ██   ██  ██ ██  ██
// ███████ ██ ██ ██  ██    ██    ███████   ███   █████
//      ██ ██ ██  ██ ██    ██    ██   ██  ██ ██  ██
// ███████ ██ ██   ████    ██    ██   ██ ██   ██ ███████

//
// ─────────────────────────────────────────────────────────
//   Estudos de Lógica e Sintaxe com JS
// ─────────────────────────────────────────────────────────

// 5 - Arrays
// ─────────────────────────────────────────────────────────
// - Permitem guardar vários valores juntos.
// - Podem ser de qualquer tipo (número, texto, booleano).
// - Organizam dados em grupo.
// - Permitem acessar vários valores
// ─────────────────────────────────────────────────────────

const frutas = ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango']
console.log(frutas)

console.log(frutas[0]) // Acessa Uva, index 0

console.log("Total de Frutas: ", frutas.length) // Quantidade de itens

frutas.push("Melância") // Adiciona novos itens

frutas.splice(2, 1) // Remove pela posição do item e quanto
console.log("Depois de remover", frutas)

for(let i = 0; i < frutas.length; i++) {
    console.log("índice", i)
    console.log(frutas[i])
} 

console.log('Usando forEach:'); // ForEach
frutas.forEach((valor, indice) => {
    console.log('Índice: ', indice, valor)
})

for (const fruta of frutas) { // For of
    console.log('Fruta: ', frutas)
}

// - Métodos 
// Filter (Filtragem)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0
})

console.log("Números: ", numeros)
console.log("Números Pares: ", numerosPares)
console.log("Números Ímpares: ", numerosImpares)

// Map (Transforma uma lista em uma outra lista mapeada)
const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})
console.log("Nossa Lista Mapeada:", numerosImpares)

// ─────────────────────────────────────────────────────────
// Lista de Exercícios: Arrays
// ─────────────────────────────────────────────────────────

// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
const listaNomes = ['Paulo', 'Arthur', 'Kawe', 'Giovanni', 'Luis']
for (const nome of listaNomes) {
    console.log(nome)
}

// 2. Adicionar e remover itens Comece com um array de frutas. 
// Adicione uma nova fruta ao final com push() e remova a primeira com shift(). 
// Mostre o array antes e depois.
const frutas = ['Uva', 'Maçã', 'Banana', 'Tomate'];
console.log("Lista Atual", frutas);
frutas.push("Melância");
frutas.shift();
console.log("Lista Atualizada: ", frutas);

// 3. Contar itens do array 
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.
const nomesCidades = ['Osasco', 'Guarulhos', 'Sorocaba', 'São Paulo'];
console.log("Total de Cidades na Lista: " + nomesCidades.length);

// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
let soma = 0;
let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (let i = 0; i < numeros.length; i++) { 
    soma += numeros[i]
}
console.log("Total dos Números somados: ", soma)

// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
const notas = [7, 5.6, 8, 9];
let somaNotas = 0;
for (let nota of notas) {
    somaNotas += nota;
}
let media = somaNotas / notas.length;
if (media >= 7) {
    console.log("Aprovado!" + media);
} else {
    console.log("Reprovado!" + media);
}

// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.
let nomes = ['Paulo', 'Luis', 'Patrícia', 'Maria'];
nomes.forEach(function(nome) {
    console.log("Olá " + nome + "!")
})


// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
let produtos = [1200, 250, 200, 560];
const descontoProduto = produtos.map(preco => preco - (preco * 0.10) );
console.log("Preços Originais: " + produtos);
console.log("Preços com 10% de Desconto: " +  descontoProduto);


// 8. Filtrar valores altos
// Crie um array com idades. 
// Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
let idades = [21, 20, 10, 5, 8, 54, 75];
const idadeFiltrada = idades.filter(num => num >= 18);
console.log("Idades maiores que 18 anos: " + idadeFiltrada );

// 9. Simulando carrinho de compras
// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.
let total = 0;
let carrinhoPrecos = [22, 54, 34, 23, 65.7, 34];
for (precos of carrinhoPrecos) {
    total += precos;
}
console.log("Sua compra Total: R$ " + total)

// Crie dois arrays:
// um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.
let tarefas = ["Estudar", "Lavar a louça", "Ir ao mercado", "Caminhar", "Dormir"];
let concluida = [false, true, false, true, false];

let tarefasPendentes = tarefas.filter(function(tarefa, index) {
  return concluida[index] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);

