//Função para verificar a ocorrência das letras 'a', 'ã' e 'â' em uma string
function verificaLetraA(str) {
    
    // Usa uma expressão regular para contar as ocorrências de 'a', 'ã' e 'â' (case insensitive)
    const count = (str.match(/[aãâ]/gi) || []).length;
    //Um if para vê se a contagem é maior que 0
    if (count > 0) {
        return `A letra 'a' existe na string e aparece ${count} vez(es).`;
    } else {
        return "A letra 'a' não existe na string.";
    }
}
// Cria uma interface de leitura para entrada do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// Pergunta ao usuario, qual a palavra
readline.question('Digite uma frase para verificar a ocorrência da letra "a": ', (texto) => {
    //Chama a função e imprime o resultado
    console.log(verificaLetraA(texto));
    //fecha a interfa
    readline.close();
});