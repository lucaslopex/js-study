function dados() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];


    function recebeEvento(evento) {

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push(nome.value);
        pessoas.push(sobrenome.value);
        pessoas.push(peso.value);
        pessoas.push(altura.value);

        console.log(pessoas);
        resultado.innerHTML = pessoas
    };

    form.addEventListener('submit', recebeEvento);
    
};
dados();