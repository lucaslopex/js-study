function imc() {
    const form = document.querySelector('.form');


    function recebeEvento(evento) {

        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('altura')
        
        var calculo = peso/altura
        var resultado

        
        if (calculo <= 18, 5) {
            
            return `Seu IMC é de: ${calculo}. (Abaixo do peso)`;
        }
        else if (calculo > 18,5 && calculo <= 24,9) {
            return `Seu IMC é de: ${calculo}. (Peso dentro da normalidade)`;
        }
        else if (calculo => 25 && calculo <= 29,9) {
            return `Seu IMC é de: ${calculo}. (Sobrepeso)`;
        }
        else if (calculo => 30 && calculo <= 34,9) {
            return `Seu IMC é de: ${calculo}. (Obesidade nível 1)`;
        }
        else if (calculo => 35 && calculo <= 39,9) {
            return `Seu IMC é de: ${calculo}. (Obesidade nível 2)`;
        }
        else if (calculo => 40) {
            return `Seu IMC é de: ${calculo}. (Obesidade nível 3)`;
        }
        else
        {
            return `Dados inválidos`;
        }

        console.log(resultado);
    };

    form.addEventListener('submit', recebeEvento);
    
};
imc();