function adicionarNumeros(valor1, valor2) {
    console.log("adicionando os numeros", valor1, valor2)
    
    let soma = valor1 + valor2;

    return soma;
}


console.log("1 Configuração realizada com sucesso!");
console.log("2 Configuração realizada com sucesso!");
console.log("3 Configuração realizada com sucesso!");
console.log("NO FINAL DA PÁGINA");

// alert("Você é um aluno?"); 

let resultado = confirm("Você é um aluno?"); // vai aparecer uma mensagem do navegador agora, com DOIS botões (LOL)

if (resultado) {
    let nome = prompt("Qual o seu nome?"); // aparecerá algo para o usuário escrever
    console.log("Nome do aluno: ", nome);
}

//nem alert, nem confirm e nem o console serão utilizados na SPRINT, é apenas para aprender.

// no javascript, tudo gira em torno de funções, que são como os métodos

adicionarNumeros(6, 7)