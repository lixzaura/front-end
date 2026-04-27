function adicionarNumeros(valor1, valor2){
    console.log("adicionando os numeros: ",valor1 , valor2)
    return valor1 + valor2;
}

function pegaNomeAluno(){
    let resultado = confirm("Voce é aluno?");

    /*
    console.log("Fechou o confirm", resultado);
    */

    console.log("Valor da variavel", resultado);

    if (resultado){
        let nome = prompt("Qual o seu nome?");
        console.log("nome do aluno: ", nome);
        return nome;
    } else{
        alert("O q vc esta fazendo aq ent??");
        return null;
    }
}

console.log("Configuracao carregada com sucesso!");
console.log("No final da pagina");

//alert("Você é aluno?");


let resultadoSoma = adicionarNumeros(6, 7);
console.log("O resultado: ", resultadoSoma)