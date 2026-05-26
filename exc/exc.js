/* =============================================================================
 TRILHA DE ENGENHARIA DE SOFTWARE: 100 EXERCÍCIOS DE JAVASCRIPT
  =============================================================================
  001: Exiba "Olá, Mundo!" no console.
  002: Crie uma variável para seu nome e exiba no console.
  003: Some dois números e mostre o resultado.
  004: Peça dois números ao usuário (prompt) e mostre a soma (alert).
  005: Calcule a média de 3 notas.
  006: Verifique se um número é maior que 10.
  007: Verifique se um número é par ou ímpar.
  008: Crie um contador de 1 a 10 usando loop For.
  009: Crie um contador de 10 a 1 usando loop While.
  010: Calcule a área de um retângulo (base * altura).
  011: Converta Celsius para Fahrenheit.
  012: Converta Real para Dólar (Câmbio 1:6).
  013: Verifique se um ano é bissexto.
  014: Verifique se uma pessoa pode votar (idade >= 16).
  015: Calcule o IMC de uma pessoa.
  016: Descubra o maior entre três números.
  017: Crie uma função que receba um nome e retorne "Olá, [nome]".
  018: Crie uma função que retorne o dobro de um número.
  019: Crie um array com 5 frutas e exiba a terceira fruta.
  020: Adicione uma fruta ao final do array anterior.
  021: Remova a primeira fruta do array anterior.
  022: Use o loop ForEach para exibir todas as frutas da lista.
  023: Use o método Map para criar uma lista com o dobro dos números de outra lista.
  024: Use o método Filter para listar apenas números maiores que 50.
  025: Use o método Reduce para somar todos os valores de uma lista.
  026: Verifique se uma palavra é um palíndromo.
  027: Crie um objeto "Carro" com marca, modelo e ano.
  028: Acesse e exiba apenas o modelo do objeto Carro.
  029: Adicione uma propriedade "cor" ao objeto Carro.
  030: Crie uma lista de 3 objetos de alunos (nome e média).
  031: Encontre o aluno com a maior média na lista anterior.
  032: Gere um número aleatório entre 1 e 100.
  033: Crie um jogo de adivinhação: o usuário tenta acertar o número secreto.
  034: Conte quantas vogais existem em uma frase.
  035: Inverta uma string (Ex: "Roma" vira "amoR").
  036: Calcule o fatorial de um número.
  037: Gere os primeiros 10 números da sequência de Fibonacci.
  038: Verifique se um número é primo.
  039: Ordene uma lista de números de forma crescente.
  040: Transforme uma string em iniciais (Ex: "Paulo Henrique" -> "P. H.").
  041: Crie uma função que simule o lançamento de um dado.
  042: Converta minutos para horas e minutos (Ex: 130 min -> 2h 10min).
  043: Verifique se uma string contém uma sub-string específica.
  044: Remova espaços em branco do início e fim de uma string.
  045: Substitua todas as vírgulas de um texto por pontos.
  046: Descubra o dia da semana de uma data específica.
  047: Calcule a diferença de dias entre duas datas.
  048: Crie um temporizador (setTimeout) que exibe um alerta após 3 segundos.
  049: Crie um intervalo (setInterval) que exibe a hora a cada 1 segundo.
  050: Pare o intervalo criado no exercício anterior após 5 execuções.
  051: Selecione um elemento pelo ID e mude seu texto (DOM).
  052: Selecione todos os parágrafos e mude a cor deles para azul.
  053: Crie um botão que, ao ser clicado, exibe um alerta.
  054: Adicione uma classe CSS a um elemento via JavaScript.
  055: Remova uma classe CSS de um elemento via JavaScript.
  056: Alterne (Toggle) uma classe ao clicar em um botão.
  057: Mude a imagem de um elemento img ao passar o mouse.
  058: Crie um elemento <p> dinamicamente e adicione-o ao body.
  059: Remova um elemento específico da página ao clicar nele.
  060: Pegue o valor de um input de texto e exiba-o em um parágrafo.
  061: Impeça o envio de um formulário e valide se o campo está vazio.
  062: Crie um contador de cliques que exibe o total na tela.
  063: Crie um efeito de "Modo Escuro" mudando as cores do body via JS.
  064: Lista de Tarefas: Adicione itens digitados em um input para uma lista ul.
  065: Clique em um item da lista de tarefas para removê-lo.
  066: Filtre uma lista de nomes no DOM conforme o usuário digita no input.
  067: Crie um relógio digital que atualiza o DOM a cada segundo.
  068: Mude a cor de fundo da página aleatoriamente ao clicar num botão.
  069: Verifique a força da senha conforme o usuário digita e mude a cor da borda.
  070: Crie uma calculadora simples (soma, sub, mult, div) com interface.
  071: Crie um Modal que abre e fecha via JavaScript.
  072: Crie um "Acordeão": clique no título para mostrar o conteúdo oculto.
  073: Altere o tamanho da fonte de um texto usando um input type="range".
  074: Arraste um elemento pela tela (Drag and Drop básico).
  075: Valide se um email é válido usando Regex ao sair do campo.
  076: Crie um cronômetro com botões de Iniciar, Pausar e Resetar.
  077: Galeria de Imagens: Clique na miniatura para trocar a imagem principal.
  078: Sorteie um vencedor de uma lista de nomes inserida pelo usuário.
  079: Verifique se o usuário chegou ao final da página (scroll) e mostre um alerta.
  080: Salve o nome do usuário no LocalStorage e exiba ao recarregar a página.
  081: Crie um jogo da velha funcional usando o DOM.
  082: Exiba uma mensagem de boas-vindas diferente dependendo da hora do dia.
  083: Crie um contador de caracteres em tempo real para um textarea.
  084: Converta um objeto JS para uma string JSON.
  085: Converta uma string JSON de volta para um objeto JS.
  086: Consuma uma API pública de CEP e preencha o endereço no formulário.
  087: Crie uma barra de progresso que aumenta conforme o usuário preenche o form.
  088: Detecte qual tecla o usuário pressionou e exiba na tela.
  089: Crie um menu hamburguer que abre e fecha a navegação.
  090: Use o comando 'Fetch' para listar títulos de posts de um blog falso.
  091: Crie uma animação simples movendo um quadrado 100px para o lado.
  092: Implemente um sistema de "Abas" (Tabs) clicáveis.
  093: Grave um valor no Cookie do navegador.
  094: Use Promise para simular um carregamento de 2 segundos.
  095: Use Async/Await para lidar com uma requisição de dados.
  096: Impeça o clique direito na página com o evento contextmenu.
  097: Crie um verificador de bissexto que mostra um emoji ✅ ou ❌ no DOM.
  098: Crie um botão "Voltar ao Topo" que aparece após 200px de scroll.
  099: Crie um carrinho de compras simples que soma os preços no DOM.
  100: [Projeto Final] Crie uma SPA que alterna entre Calculadora de IMC e TMB.
*/