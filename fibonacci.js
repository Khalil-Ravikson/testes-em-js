
// Afunção para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
    //Inicializa os dois primeiros números da sequência de Fibonacci
    let a = 0, b = 1;
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    //Verifica se o número fornecido é igual ao número atual da sequência
    if (b === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo/Teste... 
const numeroTeste = 21;
console.log(verificaFibonacci(numeroTeste));

// Uma interface apara entrada do usuário usando readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//Pergunta ao usuário para digitar um número 
readline.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (numero) => {
    //Chama a função 
    console.log(verificaFibonacci(parseInt(numero)));
    //Fecha a interfacae
    readline.close();
});