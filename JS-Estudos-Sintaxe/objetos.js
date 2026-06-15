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

// 6 - Objetos
// ─────────────────────────────────────────────────────────
// Estrutura que agrupa dados relacionados em formato de pares: chave e valor
let pessoa = {
    nome: 'Paulo',
    idade: 21,
    temCarteira: true
};

pessoa.sobrenome = 'Paula';
console.log("Nome: ", pessoa.nome)
console.log("Sobrenome: ", pessoa.sobrenome)

const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 303
};

livro.publicado = true;
livro.idiomas = [
    'Ingles', 'Portugues', 'Espanhol'
]

// - Objetos e Propriedades
livro.idioma.push('Mandarim') // push adiciona novo elemento
delete livro.paginas // remove elemento páginas

// - Métodos de Objetos e For In
const pessoa = {
    nome: 'Vinicios',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}
for (const chave in pessoa) {
    console.log('Chave: ', chave)
    console.log('Valor: ', pessoa[chave])
}

const chaves = Object.keys(pessoa) // Retorna um array contendo apenas as chaves (nomes das propriedades)
const valores = Object.values(pessoa) // Retorna um array contendo apenas os valores armazenados

const entradas = Object.entries(pessoa) // Retorna um array de arrays, onde cada sub-array é um par contendo a chave e o valor [chave, valor]

console.log('Chaves:', chaves)
console.log('Valores:', valores)
console.log('Entradas: (chave/valor):', entradas)

// ─────────────────────────────────────────────────────────
// Lista de Exercícios: Objetos
// ─────────────────────────────────────────────────────────

// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.
const eu = {
    nome: "Paulo",
    idade: 21,
    profissao: 'Auxiliar de Enfermagem'
};

// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.
console.log(eu.nome);

// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.
eu.idade = 22;
console.log(eu.idade)

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".
eu.cidade = "Guarulhos";
console.log(eu.cidade)

// 5. Função com objeto
// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa
function apresentar(eu) {
    return "Nome: " + eu.nome + " Idade: " + eu.idade + " Profissão: " + eu.profissao + " Cidade: " + eu.cidade
}
exibir = apresentar(eu)
console.log(exibir)

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const listaPessoas = [
    {
        nome: 'Ana',
        idade: 10
    },
    {
        nome: 'Lucas',
        idade: 23
    },
    {
        nome: 'Luis',
        idade: 37
    }
];

// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.
const maioresDeIdade = listaPessoas.filter(pessoa => pessoa.idade >= 18); 
const nomesMaiores = maioresDeIdade.map(pessoa => pessoa.nome);
console.log(nomesMaiores);

// 8. Objeto com método
// Crie um objeto chamado usuario com as propriedades nome e saudacao.
// A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.
const usuario = {
    nome: 'Paulo',
    saudacao: function() {
        console.log("Seja Bem-vindo(a)" + ' ' + usuario.nome + "!");
    }
};

usuario.saudacao()

// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
for (let chave in eu) {
    console.log(`${chave}: ${eu[chave]}`); 
}

// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).
const produto = {
    preco: 1200,
    quantidade: 2
}
const valorTotal = produto.preco * produto.quantidade;
console.log(`Valor total da compra: R$${valorTotal}`); 

// - Compreendendo (JSON) JavaScript Object Notation
// JSON é uma fomra de escrever dados como texto, forma que é muito parecida com os objetos usados.

// { 
//    "nome": "João", 
//   "idade": 30, 
//   "temCarteira": true 
// }

// Em JSON, as chaves são sempre escritas entre aspas duplas (");
// JSON é sempre uma string de texto, não um objeto vivo de JavaScript. 
 
// Quando usamos JSON?
// O JSON é usado para trocar dados entre sistemas. 
// Por exemplo, quando um site busca informações em um servidor, os dados geralmente vêm em formato JSON.

let respostaDoServidor = '{"nome":"João","idade":30}'; // String

// Para transformar em objeto e poder acessar normalmente, usamos:
let objeto = JSON.parse(respostaDoServidor); 
console.log(objeto.nome); // Resultado: João

// Se quisermos fazer o contrário — transformar um objeto em texto JSON — usamos:
let pessoa = { nome: 'João', idade: 30 }; 
let json = JSON.stringify(pessoa); 
console.log(json); // Resultado: '{"nome":"João","idade":30}'

// RESUMO PRÁTICO!
// Objeto = estrutura viva no código JavaScript.
// JSON = formato textual que representa dados.
// Para converter JSON em objeto, usamos JSON.parse().
// Para converter objeto em JSON, usamos JSON.stringify().