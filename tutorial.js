//Variavel e Constante
let nome = "Luiz" //Variavel
const port = 3000 //Constante

//if
let valor = 30
if(valor >= 30) {
    //faz alguma coisa se for maior ou igual
} else {
    //faz OUTRA coisa se for menor
}

//for
let cartas = [12, 32, 51, 66, 100]

//For padrão (pouco usado)
for(let i = 0; i < cartas.length; i++) {
    console.log(cartas[i])
}

//For of
for(let carta of cartas) {
    console.log(carta)
}

//Map (mais usado de todos)
cartas.map(carta => {
    console.log(carta)
})