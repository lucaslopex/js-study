window.alert('Acesso Restrito')
window.confirm('Se tiver acesso autorizado, continue')
let nome = window.prompt('Digite seu nome:')
let conf = window.confirm('Confirma esses dados?')
let num1 = window.prompt('Digite o primeiro número para o cálculo: ')
let num2 = window.prompt('Digite o segundo valor:')
num1 = Number(num1)
num2 = Number(num2)

console.log ('Nome: ', nome)
console.log ('Confirmação: ', conf)
window.alert(nome)
window.alert(`Resultado é: ${num1 + num2}`)