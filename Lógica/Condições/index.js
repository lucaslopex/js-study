const hora = 12;

if (hora >= 0 && hora <= 11)  {
    console.log('Bom dia!');
}
else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
    
}
else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}
else{
    console.log('Horário invalido');
}

const nota = 6;

if (nota < 6) {
    console.log('Reprovado')
}
else if (nota >= 6 && nota <= 7) {
    console.log('Aprovado em média');
}
else if (nota >= 7 && nota <= 9) {
    console.log('Aprovado com nota acima da média');
}
else if (nota == 10) {
    console.log('Aprovado com êxito');
}
else {
    console.log('Nota inválida');
}
console.log(`Nota do aluno(a) é: ${nota}`)
console.log('Nota escolar exibida com sucesso')