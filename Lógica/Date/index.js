// função data         ano, mês, data, hora, minuto, segundos, (acréscimo) 
// ao usar o acréscimo se for adicionar aos segundos, se torna milésimo, se acresentar aos minutos se torna segundos
//Mês começa do 0 (0=Janeiro)
//date como valor
const data = new Date( 1997, 0, 17, 6, 30, 17, 1000);

//date como string
const dataString = new Date('1997-01-17 07:30:17')

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milésimos', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); //0 é domingo, 6 - Sabádo
console.log('   ');


console.log(data.toString());
console.log(dataString.toString());

