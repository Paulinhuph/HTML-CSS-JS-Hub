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

// ─────────────────────────────────────────────────────────
// Praticando: Functions
// ─────────────────────────────────────────────────────────
// São coleções NÃO ordenadas de valores, organizados em pares de chave-valor.
// const obj = {
//      chave: valor
// }
// Sintaxe de Objeto
const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
  score: 865,
  recorrente: true,
  endereco: {
    logradouro: 'Rua A',
    num: '125A',
    complemento: 'apto 24',
    //restante endereco
  },
  tags: ['premium', 'clube'],
};

// - MANIPULAÇÃO DE OBJETOS
console.log(cliente.nome); // string
console.log(cliente.score); // numero
console.log(cliente.endereco); // objeto

const cliente = {
    nome: 'Joana A',
    cpf: '1234456565643',
    email: 'j@j.com',
};
cliente.celular = '55119999999'; // se Não existir, ele inclui
console.log(cliente)
cliente.celular = '55119999998'; // se já existir ele sobrescreve
console.log(cliente.celular)

const cliente1 = {
    'nome completo': 'Joana A',
    cpf: '1234456565643',
    email: 'j@j.com',
};
console.log(cliente['nome completo']);

// - MÉTODOS INTERNOS DE OBJETOS
// THIS - é uma palavra-chave especial que se refere ao "contexto" em que uma função está sendo executada
// Quando uma função é chamada como método de um objeto, 
// o this refere-se ao próprio objeto que está fazendo a chamada
const cliente = {
    nome: 'Joana A',
    score: 865,
    recorrente: true,
    tags: ["premium", "clube"],
    saudaCliente() {
        console.log(`boas vindas, ${this.nome}`);
    },
};

cliente.informarScore = function informarScore() {
    console.log(`seu score é ${this.score}`);
};
cliente.informarScore();
// seu score é 865


const user = {
    nome: 'Roberta R',
    nascimento: '1996-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

user.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0,4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`A idade pe ${idade}`);
}

user.calculaIdade()
console.log(user);

// OBJECT - é uma estrutura de dados fundamental que permite agrupar múltiplos valores sob um mesmo nome. 
const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
};
console.log(Object.keys(cliente));
// Saída: ['nome', 'cpf', 'email', 'score', 'recorrente', 'tags']
console.log(Object.values(cliente));
// Saída: ['Joana A', '12345678987', 'j@j.com', 865, true, ['premium', 'clube']]
console.log(Object.entries(cliente));
// Saída:
// [
//     [ 'nome', 'Joana A'],
//     ...
// ]

// FOR...IN 
const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
};

for (const info in cliente) {
  const texto = `chave ${info}, valor do tipo ${typeof cliente[info]}`;
  console.log(texto);
}
// Saída:
// chave nome valor do tipo string
// ... para todos objetos

// - DESAFIOS
// ─────────────────────────────────────────────────────────
// Você está desenvolvendo um sistema para uma loja online. Cada produto do catálogo deve ser representado por um objeto com informações de nome, preco e disponivel. Escreva um programa que:
// Crie um objeto chamado produto.
// O objeto deve conter as propriedades: nome, preco, disponivel.
// Exiba o objeto no console.
const produto = {
    nome: 'Fone de Ouvido',
    preco: 149.9,
    disponivel: true
};
console.log(produto);

// Você está criando um painel de configurações para um aplicativo. As configurações são armazenadas em um objeto e você precisa acessar informações específicas para exibição.
// Escreva um programa que:
// Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// Acesse tema usando notação de ponto.
// Acesse idioma usando notação de colchetes.
// Exiba os dois valores no console.
const configuracoes = {
    Tema: 'escuro',
    'Idioma': 'pt-BR'
};
console.log("Tema:", configuracoes.Tema);
console.log("Idioma:", configuracoes['Idioma']);

// Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:
// Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// Acesse o índice 2 da lista que está dentro do objeto.
// Exiba no console a frase: "Ingrediente complementar: [ingrediente]".
const receita = {
    nome: 'Omelete',
    ingredientes: ['Ovo', 'Cebola Picada', 'Tomate Picado', 'Sal a Gosto', 'Manteiga'],
    tempoPreparo: '15 minutos'
};

console.log(`Ingrediente complementar: ${receita.ingredientes[2]}`);

// Você está desenvolvendo um sistema para uma locadora de carros. Cada veículo tem informações cadastradas, mas agora a empresa decidiu remover a informação do modelo antigo dos carros. Escreva um programa que:
// Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;]
// Remova a propriedade modeloAntigo;
// Exiba o objeto final no console.
const carro = {
    marca: 'Ford',
    modelo: 'KA+',
    ano: 2017,
    modeloAntigo: 'KA'
};
delete carro.modeloAntigo;
console.log(carro);

// Você está desenvolvendo um painel de monitoramento que exibe informações sobre dispositivos conectados à rede. Cada dispositivo é representado por um objeto, e todos estão organizados dentro de um array.
// Escreva um programa que:
// Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
// Use um loop para exibir no console o nome e status de cada dispositivo.
const dispositivos = [
    {nome: 'Impressora', status: 'ativo'},
    {nome: 'Sacnner', status: 'inativo'},
    {nome: 'Projetor', status: 'ativo'}
];
for (const info of dispositivos) {
    console.log(`Dispositivo: ${info.nome} | Status: ${info.status}`)
};

// Você está desenvolvendo um sistema de controle de máquinas em uma fábrica. Cada máquina é representada por um objeto que, além das informações básicas, também possui um método interno que exibe seu status. Escreva um programa que:
// Crie um objeto maquina com as propriedades: nome, funcionando.
// Adicione um método chamado exibirStatus que exibe no console: "A máquina [nome] está em funcionamento." ou "A máquina [nome] está parada.", dependendo do valor de funcionando.
// Chame o método exibirStatus.

const maquina = {
    nome: 'Esteira Transportadora',
    funcionando: true,
    exibirInfo: function() {
        if (this.funcionando) {
            console.log(`A máquina ${maquina.nome} está em funcionamento`);
        } else {
            console.log(`A máquina ${this.nome} está parada.`);
        }
    }
};
maquina.exibirInfo();

// Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa. 
// Os dados chegam como um array de pares, onde cada par representa uma chave e seu respectivo valor, 
// e você precisa transformar isso em um objeto estruturado, que será usado pelo sistema para preencher 
// os campos automaticamente.
// Sua tarefa é:
// Criar uma função chamada montarObjeto que receba como parâmetro um array de pares chave-valor, como este:
// [
//   ['nome', 'João'],
//   ['idade', 30],
//   ['cidade', 'Curitiba']
// ]
// A função deve retornar um objeto com essas propriedades montadas:
//{
// nome: 'João',
//  idade: 30,
//  cidade: 'Curitiba'
// }
function montarObjeto(arrPares) {
    const resultado = {};

    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor;
    }
    return resultado;
}
const dados = [
    ['nome', 'Paulo'],
    ['idade', 30],
    ['cidade', 'Curitiba']
];

console.log(montarObjeto(dados));

// Você foi a pessoa encarregada de desenvolver uma funcionalidade para o sistema de inspeções técnicas de uma fábrica. Cada máquina inspecionada gera automaticamente um relatório de medições, contendo dados como temperatura, vibração, pressão e nível de ruído. Essas informações são organizadas dentro de um objeto, onde cada chave 
// representa uma categoria avaliada e o valor representa o nível registrado na inspeção.
// Exibir todas as categorias avaliadas;
// Exibir todos os valores registrados;
// Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com status, seguindo a seguinte lógica:
// Se o valor for maior que 50, mostre a mensagem (alerta)
// Caso contrário, mostre (ok)
const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30
};
console.log(`Categorias avaliadas: ${Object.keys(relatorio)}`);
console.log(`Valores Registrados: ${Object.values(relatorio)}`);

console.log("\nDetalhamento:")
for (const [chave, valor] of Object.entries(relatorio)) {
    const status = valor > 50 ? "alerta" : "ok";
    console.log(`${chave}: ${valor} ${status}`);
}

// Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. Cada máquina registra os meses em que passou por manutenção ao longo do ano, armazenando a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade.
// Agora, o sistema precisa gerar um relatório que exiba:
// O total de dias parados no ano.
// A quantidade de meses com manutenção (ou seja, com valor maior que zero).
// Um alerta caso o total de dias parados seja maior que 20 dias: Status: Atenção! Acima do limite anual. 
// ou Status: Dentro do limite anual.
const manutencao = {
    jan: 2,
    fev: 0,
    mar: 5,
    abr: 4,
    mai: 0,
    jun: 7
};
totalDias = 0;
mesesComParada = 0;
for (let mes in manutencao) {
    const dias = manutencao[mes];
    totalDias += dias;

    if (dias > 0) {
        mesesComParada++;
    }
}
console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
    console.log("Status: Atenção! Acima do limite anual.");
} else {
    console.log("Status: Dentro do limite anual");
}