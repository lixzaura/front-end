// DOM
const botao = document.getElementById('btn'); //o const é uma variável que atribuimos um valor apenas uma vez
                                                // sem a possibilidade de trocar o valor dela dpeois

const btn = document.querySelector("#btn");
const primary = document.querySelector(".primary") ; //o querySelector busca o elemento pela sua classe ou id com a sintaxe do css
const btn2 = document.querySelector("#btn2");
const input = document.querySelector("input");

console.log("botao", botao);
console.log("btn", btn);
console.log("primary", primary);

function callback(e) { // o e é uma constante que busca algo. o e.target busca o elemento que foi clicado
     e.stopPropagation();
    console.log("Reagir chamado a partir do botao", e.target);
    e.target.innerText = "Clicado";
    console.log("this", this); // não vamos usar o this em soluções simples
}

botao.addEventListener("click", callback); // Use função nomeada se precisar remover o evento ou reutilizar.
btn2.addEventListener("click", callback);

btn.addEventListener("click", (e) => { // Uma função arrow, rápida
    console.log("Evento do btn com arrow function", e);
});

// funcao anonima ou anonimous function
primary.addEventListener("click", function () { // uma função anonima
    console.log("eu sou uma funcao anonima");
});

// a diferença da função normal, anonima e arrow é, superficialmente, apenas de sintaxe.
    // apenas tem diferença quando utilizamos o "this", que não vamos fazer o uso dele no momento

input.addEventListener("input", (e) => {
    console.log(e.target.value);
    console.log("input this", this);
});

input.addEventListener("keypress", (e) => {
    console.log("keypress", ekey, e.shifKey);
})

document.addEventListener("click", (e) => {
    console.log("click em qualquer lugar da tela", e.clientX, e.clientY)
})