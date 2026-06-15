// 10. Método no objeto
// Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.
function livro (titulo, autor) {
    this.titulo = titulo;
    this.autor = autor
    this.descrever = function() {
        return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
    };
};
const livro1 = new livro("O Hobbit", "J. R. R. TOlkien");
const livro2 = new livro("O Mito de Sísifo", "Albert Camus");


console.log(livro1.descrever());
console.log(livro2.descrever());
