//Objetos
let cartas = [
    {
        "nome": "Sol Ring",
        "custo": {
            "incolor": 2,
            "branco": 0,
            "verde": 0,
            "azul": 0,
            "vermelho": 0,
            "preto": 0
        },
        "modificadores": [],
        "texto": "vira e adiciona duas mana incolor",
        "tipo": "artefato"
    },
    {
        "nome": "Rhystic Studies",
        "custo": {
            "incolor": 1,
            "branco": 0,
            "verde": 0,
            "azul": 1,
            "vermelho": 0,
            "preto": 0
        },
        "modificadores": [],
        "texto": "Quando um oponente jogar um feitiço, você pode comprar um card, a não sert que aquele jogador pague 1",
        "tipo": "Encantamento"
    },
    {
        "nome": "Dockside Extortionist",
        "custo": {
            "incolor": 1,
            "branco": 0,
            "verde": 0,
            "azul": 0,
            "vermelho": 1,
            "preto": 0
        },
        "modificadores": [],
        "texto": "Quando Dockside Extortionist entra no campo de batalha, crie X tokens de tesouro, onde X é o numero de artefatos e encantamentos que seus oponentes controlam",
        "tipo": ["Criatura", "Goblin", "Pirata"]
    },
    {
        "nome": "Hostile Investigator",
        "custo": {
            "incolor": 3,
            "branco": 0,
            "verde": 0,
            "azul": 0,
            "vermelho": 0,
            "preto": 1
        },
        "texto": "Quando Hostile Investigator entra no campo de batalha, oponente alvo descarta uma carta. Quando um ou mais jogadores discartam uma ou mais cartas, investigue. Essa habilidade só é ativada uma vez por turno",
        "tipo": ["Criatura", "Ogro", "Ladino", "Detetive"]
    },
    {
        "nome": "Rakdos, Patrono do Caos",
        "custo": {
            "incolor": 4,
            "branco": 0,
            "verde": 0,
            "azul": 0,
            "vermelho": 1,
            "preto": 1
        },

        // custo: [2, 0, 0, 0, 1, 1]
        "modificadores": ["Voar", "Atropelar"],
        "texto": "",
        "tipo": ["Criatura", "Goblin", "Pirata"]
    },

]

let criaturas = cartas.filter(carta => {
    return carta.tipo.includes("Criatura")
})

let bolinhosDeCarta = [10, 10, 10]

let totalDeCartas = bolinhosDeCarta.reduce((acumulador, valorAtual) => { 
    return acumulador = acumulador + valorAtual
})

/**
 * if
 * function
 * for-each
 * map
 * filter
 * reduce
 */