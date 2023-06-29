//               0         2         3
const alunos = ['Lucas', 'Gabriel', 'Rafael'];
console.log(alunos);

//Alterando no índice
alunos[0] = 'Carlos'
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//Constante alunos + tamanho dela
console.log(alunos.length);

//Adicionando após o último
alunos[alunos.length] = 'Josué'
console.log(alunos);
console.log(alunos.length);

//Adicionando com push (no fim do índice)
alunos.push('Gustavo');
alunos.push('Luiz');
console.log(alunos);
console.log(alunos.length);

//Adicionando do índice 0 e movendo todos uma "casa"
alunos.unshift('Levi'); //vai ficar no índice 1 pois vem primeiro
alunos.unshift('Lucas');
console.log(alunos);
console.log(alunos.length);

//Removendo o último índice
const removed = alunos.pop();
console.log(removed);
console.log(alunos);
console.log(alunos.length);

//Removendo do começo do índice
const removedpre = alunos.shift();
console.log(removedpre);
console.log(alunos);
console.log(alunos.length);

//Deletando registro no índice
delete alunos[1];
console.log(alunos);
console.log(alunos.length);

alunos[1] = 'Lucas'

//Filtrando por índice
console.log(alunos.slice(0, 3)); //vai retornar os 3 primeiros índices
console.log(alunos.slice(0, -1)); //vai retornar todos menos o útlimo

//Verificando se é array
console.log(typeof alunos); //Tipo
console.log(alunos instanceof Array); //É array?