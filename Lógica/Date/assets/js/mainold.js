const h1 = document.querySelector('.container h1');

const data = new Date()
const dia_sem = data.getDay(data);
const dia = data.getDate(data);
const mes_atual = data.getMonth(data) + 1;
const ano = data.getFullYear(data);
//Horas
const hora_atual = data.getHours(data);
const minutos_atual = data.getMinutes(data);
console.log(dia_semana);

function dia_semana(dia) {
    switch (dia){
        case 0:
            return ('Domingo')
        break;
        case 1:
            return ('Segunda-Feira')
        break;
        case 2:
            return ('Terça-Feira')
        break;
        case 3:
            return ('Quarta-Feira')
        break;
        case 4:
            return ('Quinta-Feira')
        break;
        case 5:
            return ('Sexta-Feira')
        break;
        case 6:
            return ('Sábado')
        break;
    
    }

}

function mes(mes) {
    switch (mes) {
        case 1:
            return ('Janeiro')
        break;
        case 2:
            return ('Fevereiro')
        break;
        case 3:
            return ('Março')     
        break;
        case 4:
            return ('Abril')        
        break;
        case 5:
            return ('Maio')
        break;
        case 6:
            return ('Junho')
        break;
        case 7:
            return ('Julho')
        break;
        case 8:
            return ('Agosto')
        break;
        case 9:
            return ('Setembro')    
        break;
        case 10:
            return ('Outubro')
        break;
        case 11:
            return ('Novembro')
        break;
        case 12:
            return ('Dezembro')
        break;
    
        default:
            break;
    }   
}

function ajusteHora(tempo) {
    return ( tempo >= 10 ? tempo : `0${tempo}`)
}

function FormataData(data) {

    const dia_sem = data.getDay(data);
    const dia = data.getDate(data);
    const mes_atual = data.getMonth(data) + 1;
    const ano = data.getFullYear(data);
    //Horas
    const hora_atual = data.getHours(data);
    const minutos_atual = data.getMinutes(data);
    console.log(dia_semana);

    return (dia_semana(dia_sem) + "," + `${dia} de ${mes(mes_atual)} de ${ano} ${ajusteHora(hora_atual)}:${ajusteHora(minutos_atual)}`)
}

console.log (dia_semana(dia_sem) + "," + `${dia} de ${mes(mes_atual)} de ${ano} ${hora_atual}:${minutos_atual}`);
h1.innerHTML = FormataData(data);
