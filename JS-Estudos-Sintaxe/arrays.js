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



// ─────────────────────────────────────────────────────────
// Praticando: Arrays
// ─────────────────────────────────────────────────────────
// Arrays são coleções ordenadas de valores.
// Cada valor é chamado de elemento e tem sua posição na lista determinada por um índice.
// const arr = [elemento, elemento, elemento, elemento, elemento];
const arrNumeros = [1, 2, 3];
const arrMisto = [5, true, 'texto'];
const arrArrays = [[1,2], ['a', 'b', 'c'], [true, false]];
const arrObjetos = [{ a: 1 }, { b: 2 }, { c: 3 }];

// - Manipulando Arrays
const arrNumeros = [46, 34, 23, 12];

arrNumeros[1] = 36;
arrNumeros[4] = 100;
console.log(arrNumeros);
// [46, 36, 23, 12, 100]

// Utilizando o FOR
const arrNumeros = [46, 34, 23, 12];
for (let i = 0; i < arrNumeros.length; i++){ // Length retorna a quantidade de itens num array
    console.log(arrNumeros[i]);
}
// [46, 34, 23, 12]

const estudantes = ["JULIANA", "aline", "SOLANGE"];

for (let i = 0; i < estudantes.length; i++) {
    estudantes[i] = estudantes[i].toUpperCase(); // toUpperCase deixa tudo maiusculo
}
// [ 'JULIANA', 'ALINE', 'SOLANGE' ]
console.log(estudantes);

// COM FOR...OF
const arrayNumeros1 = [18, 95, 45, 76, 23, 99];
for (let numero of arrayNumeros1) {
    if (numero + 10 > 100 || numero > 100) continue;
    console.log(numero + 10);
};

// - Métodos de Array
// .PUSH
arrnumeros.push(67); // Adiciona novo item ao final do array

// .POP
arrNumeros.pop(); // Retira o último index

// .INDEXOF
const elem = arrNumeros.indexOf(12);
console.log(elem);
// 0 Retorna o index localizado do elemento passado, ou seja, 12 esta no index 0
// Situação	Retorno de indexOf()	Significado
// O valor existe no array (primeira ocorrência) - Número ≥ 0 - Índice onde o valor foi encontrado
// O valor não existe no array - -1	- Valor não encontrado na lista

// .SLICE
const novoArr = arrNumeros.slice(2);
console.log(novoArr);
// [34, 45, 56] // extrai parte de arrays ou string criando uma nova cópia sem modificar o dado original

// CALLBACKS
const arrNumero = [12, 23, 34, 46, 56];
arrNumeros.forEach((num, i) => {
    console.log(`o número ${num} está no índice ${i}`);
});
// o número 12 está no índice 0
// o número 23 está no índice 1
// o número 34 está no índice 2
// o número 45 está no índice 3
// o número 56 está no índice 4

// EXEMPLO: 
// Clonar array multidimensional com "deep copy"
// por que não podemos clonar arrays via variável?
const arr1 = [[1, 2], 2, 3];
const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    })
    return copia;
}
const arr2 = copiaArray(arr1);
arr1[0][0] = 5;
console.log(arr1);
console.log(arr2);
// [ [ 5, 2 ], 2, 3 ]
// [ [ 1, 2 ], 2, 3 ]

// EXEMPLO:
// filtrar um array e alterar valores específicos
// ex: numeros para string

const cpfs = ['12343423423535', '12343243423', 43435324353543, '123434564233', 90494384332];

const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString())

console.log(result)


// - DESAFIOS
// ─────────────────────────────────────────────────────────
// Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.
// Escreva um programa que:
// Crie um array com os itens iniciais da lista de compras.
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.
const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log(`Segundo item da lista: ${listaDeCompras[1]}`);
listaDeCompras[listaDeCompras.length - 1] = 'fruta';
console.log(`Lista após modificação: ${listaDeCompras }`);

// Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.
// Escreva um programa que:
// Crie um array com os valores das despesas.
// Use um loop for para somar os valores.
// Exiba o total gasto.
const despesas = [120, 80, 45.5, 200, 60];
total = 0;
for (let i = 0; i < despesas.length; i++ ) {
    total += despesas[i];
}
console.log(`Total de despesas: R$ ${total}`);

// Você está criando um painel para um sistema de chamada escolar. Você recebeu uma lista com os nomes das pessoas estudantes de uma turma e precisa exibir um por um para fazer a chamada em sala. Escreva um programa que:
// Crie um array com os nomes das pessoas.
// Use o for...of para exibir cada nome individualmente.
const estudantes = ['Carla', 'João', 'Paulo', 'Patrícia', 'Camila', 'Lucas'];
for (const aluno of estudantes) {
    console.log(`Estudante: ${aluno}`)
}

// Você recebeu a missão de desenvolver um sistema de envio de notificações. A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no console informando que a mensagem foi enviada. Escreva um programa que:
// Crie um array com uma lista de mensagens.
// Use o método forEach() para exibir uma mensagem no console para cada item da lista.
const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];
mensagens.forEach((msg, i) => {
    console.log(`Notificação: ${msg}`);
});


// Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:
// Crie um array com três tarefas iniciais.
// // Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação.
const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
tarefas.push('Aprender Python')
console.log(`Lista após adicionar: ${tarefas}`);

tarefas.pop()
console.log(`Lista após remover a última tarefa: ${tarefas}`)

// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:
// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.
const pedidos = ['camiseta', 'calça', 'tênis'];
console.log("Array original:", pedidos);

const copiaPedidos = pedidos.slice();
copiaPedidos.push("boné");
console.log("Array copiado:", copiaPedidos);

// Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:
// Crie um array com nomes de livros.
// Crie uma variável com o nome de um livro procurado.
// Verifique se o livro está na lista.
// Exiba uma mensagem informando se o livro foi encontrado ou não.
const livros = ['O Estrangeiro', 'O Hobbit', 'Crime e Castigo', 'Crepúsculo dos Ídolos'];
const livroProcurado = 'Memórias do Subsolo';

if (livros.indexOf(livroProcurado) !== -1) {
    console.log(`O Livro ${livroProcurado} está disponível.`);
} else {
    console.log(`O Livro ${livroProcurado} não foi encontrado.`);
}

// Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:
// Crie um array com os preços originais dos produtos.
// Use o método map() para aplicar 10% de desconto em cada item.
// Exiba o novo array com os preços já com o desconto aplicado.
const precos = [100, 80, 50, 120];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(`Preços com Desconto: ${precosComDesconto}`);

// Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.
// Para isso, você precisa:
// Criar um array com objetos contendo nome e idade de cada participante.
// Usar o método filter() para:
// Selecionar somente os participantes com 18 anos ou mais.
// Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
// Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
// Exibir a lista de aprovados no final.
const participantes = [
    {nome: 'Ana', idade: 21},
    {nome: 'Paulo', idade: 31},
    {nome: 'Sara', idade: 32},
    {nome: 'Amanda', idade: 16},
    {nome: 'Luis', idade: 19}
]
const maiores = participantes.filter(p => {
    p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
    return p.idade >= 18;    
});
const aprovados = maiores.map(p => p.nome);
console.log("Lista de aprovados:", aprovados);

