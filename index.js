//declaracao e leitura das variaveis
let readlineSync = require('readline-sync');
let vitorias = readlineSync.question("Digite a quantidade de vitórias: ");
let derrotas = readlineSync.question("Digite a quantidade de derrotas: ");
let saldo = rankedJog(vitorias,derrotas);
var saldoVitoria;
var nivel;

//função que recebe os parametros da quantidade de vitoria e derrotas
function rankedJog(vitorias, derrotas){
    //calcular o saldo de vitórias do jogador
    let saldoVitorias = vitorias - derrotas;
    
    if(saldoVitorias <= 10){
        nivel = "Ferro";       
    }else
    if(saldoVitorias > 10 && saldoVitorias <= 20){
        nivel = "Bronze";
    }else
    if(saldoVitorias > 20 && saldoVitorias <= 50){
        nivel = "Prata";
    }else
    if(saldoVitorias > 50 && saldoVitorias <= 80){
        nivel = "Ouro";
    }else
    if(saldoVitorias > 80 && saldoVitorias <= 90){
        nivel = "Diamante";
    }else
    if(saldoVitorias > 90 && saldoVitorias <= 100){
        nivel = "Lendária";
    }else
    if(saldoVitorias >= 101){
        nivel = "Imortal";
    }

   //exibir a mensagem final do jogador
    console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de "+ nivel)
}
