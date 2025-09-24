// --- Início do Código ---


// Armazena o nome e a quantidade de experiência (XP) do herói.
// Você pode alterar esses valores para testar diferentes níveis!
let nomeHeroi = "Aragorn";
let xpHeroi = 8500; // Altere este valor para ver o nível mudar

// Variável para armazenar o nível do herói
let nivelHeroi;


// Verifica a faixa de XP e atribui o nível correspondente.
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) { 
    nivelHeroi = "Radiante";
}


// Exibe a mensagem final com o nome e o nível do herói.
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);

// --- Fim do Código ---