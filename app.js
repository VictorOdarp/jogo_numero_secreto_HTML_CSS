function gerarNumeroAleatório(){
    let numeroSorteado = Math.floor(Math.random() * numeroMaximo + 1);

    if(lista.includes(numeroSorteado)){
        return gerarNumeroAleatório();
    }
    else{
        lista.push(numeroSorteado);
        console.log(lista)
        console.log(numeroSorteado)
    }

    if(lista.length >= numeroMaximo){
    lista = [];
}

    return numeroSorteado;
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", `Escolha um número de 1 a ${numeroMaximo}`);
}

function resetarJogo(){
    textoInicial();
    tentativa = 1;
    document.querySelector("input").value = null;
    numeroSecreto = gerarNumeroAleatório();
    document.getElementById("reset").setAttribute("disabled", true);
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        tentativa > 1 ? mensagemTentativa = `Parabéns, você acertou em ${tentativa} tentativas!` : mensagemTentativa = `Parabéns, você acertou em ${tentativa} tentativa!`;
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reset").removeAttribute("disabled");
    }
    else if (chute < numeroSecreto){
        exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
        document.querySelector("input").value = null;
        tentativa++;
    }
    else {
        exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
        document.querySelector("input").value = null;
        tentativa++;
    }
}

let lista = [];
let numeroMaximo = 10;
textoInicial();
let numeroSecreto = gerarNumeroAleatório();
let tentativa = 1;
let mensagemTentativa = "";