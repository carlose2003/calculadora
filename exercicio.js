let valor, valor2, operacao, resposta, resultado, resetar;
// Primeiro valor
valor = window.prompt("valor: ");
// Operação que será executada
operacao = window.prompt("Qual operacao execultar? +, -, *, /, p(potênciação) ou %");
// Segundo valor
valor2 = window.prompt("valor: ");
// Estrutura condicional
switch (operacao) {
    case '+':
        resultado = Number(valor) + Number(valor2);
        window.alert(valor+" + "+valor2+" = "+resultado);
        break;
    case '-':
        resultado = Number(valor) - Number(valor2);
        window.alert(valor+" - "+valor2+" = "+resultado);
        break;
    case '*':
        resultado = Number(valor) * Number(valor2);
        window.alert(valor+" * "+valor2+" = "+resultado);
        break;
    case '/':
        resultado = Number(valor) / Number(valor2);
        if (Number(valor2 == 0)) {
            resultado = 0;
        }
        window.alert(valor+" / "+valor2+" = "+resultado);
        break;
    case 'p':
        resultado = Math.pow(Number(valor), Number(valor2));
        window.alert(valor+" ^ "+valor2+" = "+resultado);
        break;
    case '%':
        resultado = Number(valor2) * (Number(valor) / 100);
        window.alert(valor+"%"+" de "+valor2+" = "+resultado);
        break;
    default:
        window.alert("Comando inválido");
}
// Variavél de resposta para a continuação ou não
resposta = window.prompt("deseja continuar? s/n");

//Estrutura condicional
if (resposta == 's') {
    valor = window.prompt("valor: ");
    operacao = window.prompt("Qual operacao execultar? +, -, *, /, p(potênciação) ou %");
    valor2 = window.prompt("valor: ");
    // Estrutura condicional
    switch (operacao) {
        case '+':
        resultado = Number(valor) + Number(valor2);
        window.alert(valor+" + "+valor2+" = "+resultado);
        break;
    case '-':
        resultado = Number(valor) - Number(valor2);
        window.alert(valor+" - "+valor2+" = "+resultado);
        break;
    case '*':
        resultado = Number(valor) * Number(valor2);
        window.alert(valor+" * "+valor2+" = "+resultado);
        break;
    case '/':
        resultado = Number(valor) / Number(valor2);
        if (Number(valor2 == 0)) {
            resultado = 0;
        }
        window.alert(valor+" / "+valor2+" = "+resultado);
        break;
    case 'p':
        resultado = Math.pow(Number(valor), Number(valor2));
        window.alert(valor+" ^ "+valor2+" = "+resultado);
        break;
    case '%':
        resultado = Number(valor2) * (Number(valor) / 100);
        window.alert(valor+"%"+" de "+valor2+" = "+resultado);
        break;
    default:
        window.alert("Comando inválido");
    }
    resposta = window.prompt("deseja continuar? s/n");
}
else if ((resposta != 's') && (resposta != 'n')) {
    window.alert("Comando inválido");
}
// Estrutura de repetição
while (resposta == 's') {
    valor = window.prompt("valor: ");
    operacao = window.prompt("Qual operacao execultar? +, -, *, /, p(potênciação) ou %");
    valor2 = window.prompt("valor: ");
    switch (operacao) {
        case '+':
        resultado = Number(valor) + Number(valor2);
        window.alert(valor+" + "+valor2+" = "+resultado);
        break;
    case '-':
        resultado = Number(valor) - Number(valor2);
        window.alert(valor+" - "+valor2+" = "+resultado);
        break;
    case '*':
        resultado = Number(valor) * Number(valor2);
        window.alert(valor+" * "+valor2+" = "+resultado);
        break;
    case '/':
        resultado = Number(valor) / Number(valor2);
        if (Number(valor2 == 0)) {
            resultado = 0;
        }
        window.alert(valor+" / "+valor2+" = "+resultado);
        break;
    case 'p':
        resultado = Math.pow(Number(valor), Number(valor2));
        window.alert(valor+" ^ "+valor2+" = "+resultado);
        break;
    case '%':
        resultado = Number(valor2) * (Number(valor) / 100);
        window.alert(valor+"%"+" de "+valor2+" = "+resultado);
        break;
    default:
        window.alert("Comando inválido");
    }
    resposta = window.prompt("deseja continuar? s/n");
    
}
// Estrutura condicional
if ((resposta != 's') && (resposta != 'n')) {
        window.alert("Comando inválido");
    }

window.alert("Adeus!");

//fim