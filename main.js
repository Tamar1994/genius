
// variaveis importantes

let order = [];
let clickedOrder = [];
let score = 0;

// definição das cores

// 0 - Azul
// 1 - Vermelho
// 2 - Verde
// 3 - Amarelo

// função para realizar sorteio da ordem

function shuffleOrders() {
    var newNumber = Math.floor(Math.random() * 4);
    order.push(newNumber);
    showOrder(order);
    console.log(order.length);
}

// função para mostrar a ordem para o jogador

function showOrder(orders){

    function showOrderColor(element, index, array) {

        var timer = index+1;

             
        if(element === 0){

            setTimeout(() => {
                $(".blue").css("opacity", 0.5);
            }, timer*1000);
            setTimeout(() => {
                $(".blue").css("opacity", 1);
            }, timer*1000+500);

        } else if(element == 1){

            setTimeout(() => {
                $(".red").css("opacity", 0.5);
            }, timer*1000);
            setTimeout(() => {
                $(".red").css("opacity", 1);
            }, timer*1000+500);

        } else if(element == 2){

            setTimeout(() => {
                $(".green").css("opacity", 0.5);
            }, timer*1000);
            setTimeout(() => {
                $(".green").css("opacity", 1);
            }, timer*1000+500);

        } else if(element == 3){

            setTimeout(() => {
                $(".yellow").css("opacity", 0.5);
            }, timer*1000);
            setTimeout(() => {
                $(".yellow").css("opacity", 1);
            }, timer*1000+500);

        }

    }

    orders.forEach(showOrderColor);

}

// listeners 

$(".blue").click(() => {
    $(".blue").css("opacity", 0.5);
    setTimeout(() => {
        $(".blue").css("opacity", 1);
    }, 500);
    clickedOrder.push(0);
    validaOrdem();
});

$(".red").click(() => {
    $(".red").css("opacity", 0.5);
    setTimeout(() => {
        $(".red").css("opacity", 1);
    }, 500);
    clickedOrder.push(1);
    validaOrdem();
});

$(".green").click(() => {
    $(".green").css("opacity", 0.5);
    setTimeout(() => {
        $(".green").css("opacity", 1);
    }, 500);
    clickedOrder.push(2);
    validaOrdem();
});

$(".yellow").click(() => {
    $(".yellow").css("opacity", 0.5);
    setTimeout(() => {
        $(".yellow").css("opacity", 1);
    }, 500);
    clickedOrder.push(3);
    validaOrdem();
});

// Função para validar ordem 

function validaOrdem(){
    var primeiroValor = order[clickedOrder.length-1];
    var segundoValor = clickedOrder[clickedOrder.length-1];

    if (primeiroValor != segundoValor){
        alert(`Você errou! \n Pontuação ${score} \n Tente novamente!`);
        order = [];
        clickedOrder = [];
        score = 0;
        shuffleOrders();
    } else if (clickedOrder.length == order.length){
        score++;
        alert(`Parabéns, Você acerto! \n Pontuação ${score} \n Proxima Rodada!`);
        clickedOrder = [];
        shuffleOrders();
    }

}

// Iniciador do jogo

alert (`Bem vindo ao Genius! \n Vamos começar?`);
shuffleOrders();