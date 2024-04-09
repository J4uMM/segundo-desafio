let resultado = saldo(10, 2)

function saldo(vitoria, derrota){
    let subtracao = (vitoria - derrota)
    let nivel = " "
    if(subtracao <= 10){
        nivel = "Rank: Ferro"
    }
    else if(subtracao >= 11 && subtracao <= 20){
        nivel = "Rank: Bronze"
    }
    else if(subtracao >= 21 && subtracao <= 50){
        nivel = "Rank: Prata"
    }
    else if(subtracao >= 51 && subtracao <= 80){
        nivel = "Rank: Ouro"
    }
    else if(subtracao >= 81 && subtracao <= 90){
        nivel = "Rank: Diamante"
    }
    else if(subtracao >= 91 && subtracao <= 100){
        nivel = "Rank: Lendário"
    }
    else if(subtracao >= 101){
        nivel = "Rank: Imortal"
    }

    console.log("O Herói tem saldo de " + subtracao + " /" + " está no " + nivel)

return subtracao
}

