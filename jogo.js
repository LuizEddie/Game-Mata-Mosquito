let altura;
let largura;
let vidas = 1;
let posicaoX;
let posicaoY;
let mosquito;
let tempo = 15;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
       document.getElementById('mosquito').remove(); 

       if(vidas > 3){
            window.location.href = "fim_de_jogo.html";
       }else{
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
        vidas++;
       }

    }

    posicaoX = Math.floor(Math.random() * largura) - 90;
    posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 :posicaoY;

    mosquito = document.createElement('img');
    mosquito.src = "imagens/mosca.png";
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);

    tamanhoAleatorio();
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3);

    switch(classe){
       case 0:
            return 'mosquito1';
       case 1:
            return 'mosquito2';
       case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

ajustaTamanhoPalcoJogo();

let cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        alert('Vitória');
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000);