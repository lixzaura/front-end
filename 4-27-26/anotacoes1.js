// este arquivo é só anotação, os códigos tem que ser executados no console da ferramenta do desenvolvedor (n sei como faz de outra forma aindaaaa)

let idade
// let serve para declarar variável (NÃO FAÇA SEM)
    // variável começa como indefined, que é sem valor, mas é diferente do null.
        // null é um valor sem nada pré definido pelo programador

let idade = 20 // int
let preco = 19.99 // float
let nome = "Felix de Freitas" // string
let casado = true // boolean
let linguagens = ["Ruby", "Kotlin", "Go", "JavaScript", "C#"] // vetor/ARRAY
linguagens[0] // = Ruby
                // 0 é o Índice

linguagens.length // mostrará o tamanho do índice
nome.length // mostrará o tamanho da string

////////////////////

let estudande =  { //objeto
            //variáveis
    nome: "John",
    idade: 18, 
    curso: "ADS",
    time: "Palmeiras"
};

estudante.nome //acessa a variável "nome" do objeto "estudante"

let curso = {
    estudantes: [estudante] //todas as variáveis do estudante, um array
}

curso.estudantes //imprimirá todas as variáveis do estudante

////////////////////////

let carro = {
    cor: "preto",
    marca: "GM",
    modelos: [
        { //listas/vetores dentro de atributos
            nome: "Blazer"
        },
        {
            nome: "Monza"
        }   // é só um exemplo de como fnciona pq não faz sentido nem um KKKKKKKKKKKK
    ],
    endereco: [
        {
            rua: "Av. Paulista",
        },
        {
            numero: 67
        }
        
    ]
}
