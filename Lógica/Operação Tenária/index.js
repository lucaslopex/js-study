const pontuacaoUser = 999


//Jeito tradicional
if (pontuacaoUser >= 1000) {
    console.log('User VIP')
}
else {
    console.log('User normal')
}

//Operação tenária
//Declaramos uma váriavel para lógica e fazemos a condição nela
const nivelUser = pontuacaoUser >= 1000 ? "User VIP" : "User normal";


const corUser = null;
//seto uma cor onde está null
const corPadrao = corUser || 'Preta';