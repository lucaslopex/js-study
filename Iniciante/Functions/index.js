function saudacao(nome) {
    //console.log(`Boa noite ${nome}`);
    return `Boa noite ${nome}`;
}

saudacao('Lucas');
saudacao('Lais');

const variavel = saudacao('Lucas');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(5, 5));
console.log(soma(3, 2));
console.log(soma(1, 6));

//utilizar a o nome da váriavel da função
const resultado = soma(2, 7);
console.log('Teste de váriavel')
console.log(resultado);

//função anônima
console.log ('Função anônima')
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

//arrow fuction
const raiz_arrow = n => n ** 0.5;
console.log ('Arrow Fuction')
console.log (raiz_arrow(16));