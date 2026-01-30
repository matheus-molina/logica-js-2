listaDosNumerosSorteados = [];
let numeroLimite = 10;
let numerSecreto = gerarNumeroAleatorio();
let tentativas =  1; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 0 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numerSecreto){
        exibirTextoNaTela('h1', 'Acertouu!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (chute > numerSecreto){
                exibirTextoNaTela('p', 'Chuta mais baixo!');
            } else {
                exibirTextoNaTela('p', 'Chuta mais auto!');
            }
        tentativas++;
        limparCampo();
    }
    }


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDosNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDosNumerosSorteados = [];
    }
    if (listaDosNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDosNumerosSorteados.push(numeroEscolhido);
        console.log(listaDosNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo(){
    numerSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}