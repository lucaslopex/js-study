const form = document.querySelector('.form');
form.addEventListener('submit', imc);
function imc(evento) {
    
        evento.preventDefault();
        const ipeso = form.querySelector('#peso');
        const ialtura = form.querySelector('#altura');
        
        const peso = Number(ipeso.value);
        const altura = Number(ialtura.value);

        console.log(peso);
        console.log(altura);

        var calculo = peso/(altura * altura)
        calculo = calculo.toFixed(2)
        console.log(calculo);
        var resultado

        
        if (calculo <= 18.5) {
            
            resultado = `Seu IMC é de: ${calculo} (Abaixo do peso)`;
        }
        else if (calculo > 18.5 && calculo <= 24.9) {
            resultado = `Seu IMC é de: ${calculo} (Peso dentro da normalidade)`;
        }
        else if (calculo >= 25 && calculo <= 29.9) {
            resultado = `Seu IMC é de: ${calculo} (Sobrepeso)`;
        }
        else if (calculo >= 30 && calculo <= 34.9) {
            resultado = `Seu IMC é de: ${calculo} (Obesidade nível 1)`;
        }
        else if (calculo >= 35 && calculo <= 39.9) {
            resultado = `Seu IMC é de: ${calculo} (Obesidade nível 2)`;
        }
        else if (calculo >= 40) {
            resultado = `Seu IMC é de: ${calculo} (Obesidade nível 3)`;
        }
        else
        {
            resultado = `Dados inválidos`;
        }

        console.log (resultado);
        //Inves de retornar o valor e o resultado, fazer outra função com os resultados e imprimir no html

        const resultadoIMC = document.getElementById('resultado-imc');
        resultadoIMC.innerHTML = resultado;
    };