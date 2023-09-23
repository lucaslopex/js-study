function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
    
}

function formatData(data) {
    const dia = zeroEsquerda (data.getDate());
    const mes = zeroEsquerda (data.getMonth() +1);
    const ano = zeroEsquerda (data.getFullYear());
    const hora = zeroEsquerda (data.getHours());
    const minutos = zeroEsquerda (data.getMinutes());
    const segundos = zeroEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos} `

    }

const data = new Date();
const dataAgora = formatData(data);
console.log(dataAgora);