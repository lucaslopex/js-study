//Chaves cria objetos e colchets array
//const pessoa1 = {
//    Nome: 'Lucas',
//    Sobrenome: 'Silva',
//    Idade: 26
//}

//console.log(pessoa1.Nome);
//console.log(pessoa1.Sobrenome);
//console.log(pessoa1.Idade);

function criaPessoa(nome, sobrenome, idade) {
    return{
        nome, sobrenome, idade
    };
    
}

const pessoa0 = criaPessoa('Lucas', 'Silva', 26);
const pessoa1 = criaPessoa('Lais', 'Silva', 21);
const pessoa2 = criaPessoa('Heloisa', 'Fernandes', 3);
console.log(pessoa0.nome, pessoa1.nome, pessoa2.nome);

