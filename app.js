alert('Boas-vindas ao jogo do número secreto!');
let numeroMaximo = parseInt(prompt('Escolha um número máximo para o jogo (mínimo 1)'));
// verificar se o número máximo é válido
while (isNaN(numeroMaximo) || numeroMaximo < 1) {
    alert('Número inválido! Escolha um número maior ou igual a 1.');
    numeroMaximo = parseInt(prompt('Escolha um número máximo para o jogo (mínimo 1)'));
}
// gerar um número secreto entre 1 e numeroMaximo
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1; // número entre 1 e numeroMaximo
console.log(numeroSecreto);
let chute = parseInt(prompt('Escolha um número de 01 a ' + numeroMaximo));
// verificar se o chute é inválido'));
let tentativas = 1;

// enquanto o chute for diferente do número secreto, continuar pedindo um novo chute
while (chute !== numeroSecreto) {
    // verificar se o chute é inválido
    if (chute < 1 || chute > numeroMaximo || isNaN(chute)) {
        alert('Número inválido! Escolha um número entre 1 e ' + numeroMaximo);
    } else {
        // verificar se o chute é maior ou menor
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++;
    }

    // pedir um novo chute
    chute = parseInt(prompt('Escolha um número de 1 a ' + numeroMaximo));
    // verificar se o chute é inválido
}

// mensagem final ao acertar
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativas}!`);
