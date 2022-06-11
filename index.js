let resultado = document.getElementById("resultado");

let sorteio = document.getElementById("sorteio");

sorteio.addEventListener("click",sortear);

function sortear(){
let escolha = parseInt(document.getElementById("escolha").value);

switch (escolha){

        case 0:
        resultado.innerHTML = "zero";
        break;

        case 1:
        resultado.innerHTML = "um";
        break;

        case 2:
        resultado.innerHTML = "dois";
        break;

        case 3:
        resultado.innerHTML = "três";
        break;

        case 4:
        resultado.innerHTML  = "quatro";
        break;

        case 5:
        resultado.innerHTML  = "cinco";
        break;

        case 6:
        resultado.innerHTML = "seis";
        break;

        case 7:
        opção = "sete";
        break;

        case 8:
        resultado.innerHTML = "oite";
        break;

        case 9:
        resultado.innerHTML  = "nove";
        break;

        case 9:
        resultado.innerHTML  = "nove";
        break;
       
}

}