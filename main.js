
// variaveis importantes

let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores

let shuffleOrder = () => {
    let colorOrdem = Math.floor(Math.random() * 4);
    order[order.length] = colorOrdem;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, i);
    }
}

//acente a proxima cor
let lightColor = (element, valor) => {

    timer = parseInt(valor) * 400;

    setTimeout(() => {
            element.classList.add('selected');
        }, timer);

    setTimeout(() => {
        element.classList.remove('selected')
    }, 400);
}

// checa se os botoes clicados são o mesmo da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \n Voce acertou! Iniciando novo nível!`);
        nextLevel();
    }
}

// funcao para o clique do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    })
    
}

// criar função que retorna a cor

let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color ==2){
        return yellow
    } else if(color == 3){
        return blue;
    }
}

// funcao para proximo nivel do jogo

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

// funcao para game over

let lose = () => {
    alert(`Pontuação ${score}! \n Você perdeu o jogo! \n Clique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Bem vindo ao Genesis! \n Iniciando novo jogo.`);
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();