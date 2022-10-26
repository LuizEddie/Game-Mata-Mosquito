let altura;
let largura;
let posicaoX;
let posicaoY;
let mosquito;
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

function posicaoRandomica() {
    posicaoX = Math.floor(Math.random() * largura) - 90;
    posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 :posicaoY;

    mosquito = document.createElement('img');
    mosquito.src = "imagens/mosca.png";
    mosquito.className = "mosquito1";
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}

ajustaTamanhoPalcoJogo();

