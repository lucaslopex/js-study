const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = DayGetPT(diaSemana);

//const diaSemana = 7;

function DayGetPT(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        //break;
        //Podemos retirar o break e colocar o return da função
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
        //break;
        case 2:
            diaSemanaTexto = 'Terçca-Feira';
        return diaSemanaTexto;
        //break;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
        return diaSemanaTexto;    
        //break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
        //break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
        break;
        case 6:
            diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;    
        //break;
        default:
            diaSemanaTexto = 'Valor inválido no date';
        return diaSemanaTexto;
        //break;
    }
}
console.log(diaSemana, diaSemanaTexto);