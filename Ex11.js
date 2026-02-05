// Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para
// conseguir avançar para o próximo nível:

// O personagem precisa ter mais de 50 pontos.
// O personagem deve ter pelo menos uma vida restante.

// Crie um programa que, dado os pontos e as vidas restantes,
// verifique se o personagem pode ou não avançar para o próximo nível.

const pontos = 100;
const vidasRestantes = 0;

if (pontos > 50 && vidasRestantes >= 1) {
    console.log("Personagem pode avançar para o próximo nível.");
} else {
    console.log("Personagem não pode avançar para o próximo nível.");
}