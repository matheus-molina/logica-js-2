let nummerSecreto = gerarNumeroAleatorio();
let tentativas =  1; 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 0 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == nummerSecreto){
        exibirTextoNaTela('h1', 'Acertouu!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você axcertou o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (chute > nummerSecreto){
                exibirTextoNaTela('p', 'Chuta mais baixo!');
            } else {
                exibirTextoNaTela('p', 'Chuta mais auto!');
            }
        tentativas++;
        limparCampo();
    }
    }


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo(){
    
}