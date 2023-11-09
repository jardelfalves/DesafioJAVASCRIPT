// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

// Declaração de duas variáveis
var numero1 = 5;
var numero2 = 10;

// Soma das variáveis
var resultadoSoma = numero1 + numero2;

// Exibe o resultado da soma em um alerta
alert("A soma é: " + resultadoSoma);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

// Declaração de uma variável
var minhaVariavel = "42"; // Você pode alterar o valor para testar diferentes casos

// Verifica se o valor é um número usando typeof
if (typeof minhaVariavel === 'number' && !isNaN(minhaVariavel)) {
    // Se for um número
    alert("É um número");
} else {
    // Se não for um número
    alert("Não é um número");
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

// Declaração de uma variável
var minhaVariavel = "Olá, mundo!"; // Você pode alterar o valor para testar diferentes casos

// Verifica se o valor é uma string usando typeof
if (typeof minhaVariavel === 'string') {
    // Se for uma string
    alert("É uma string");
} else {
    // Se não for uma string
    alert("Não é uma string");
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

// Declaração de uma variável
var minhaVariavel = true; // Você pode alterar o valor para testar diferentes casos

// Verifica se o valor é um booleano usando typeof
if (typeof minhaVariavel === 'boolean') {
    // Se for um booleano
    alert("É um booleano");
} else {
    // Se não for um booleano
    alert("Não é um booleano");
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

// Declaração de duas variáveis
var numero1 = 15;
var numero2 = 7;

// Subtração das variáveis
var resultadoSubtracao = numero1 - numero2;

// Exibe o resultado da subtração em um alerta
alert("O resultado da subtração é: " + resultadoSubtracao);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

// Declaração de duas variáveis
var numero1 = 5;
var numero2 = 8;

// Multiplicação das variáveis
var resultadoMultiplicacao = numero1 * numero2;

// Exibe o resultado da multiplicação em um alerta
alert("O resultado da multiplicação é: " + resultadoMultiplicacao);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

// Declaração de duas variáveis
var numero1 = 10;
var numero2 = 2;

// Divisão das variáveis
var resultadoDivisao = numero1 / numero2;

// Exibe o resultado da divisão em um alerta
alert("O resultado da divisão é: " + resultadoDivisao);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

// Declaração de uma variável
var meuNumero = 8; // Você pode alterar o valor para testar diferentes casos

// Verifica se o valor é um número par
if (meuNumero % 2 === 0) {
    // Se for um número par
    alert("É um número par");
} else {
    // Se não for um número par
    alert("Não é um número par");
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

// Declaração de uma variável
var meuNumero = 7; // Você pode alterar o valor para testar diferentes casos

// Verifica se o valor é um número ímpar
if (meuNumero % 2 !== 0) {
    // Se for um número ímpar
    alert("É um número ímpar");
} else {
    // Se não for um número ímpar
    alert("Não é um número ímpar");
}
