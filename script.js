const nomeCartao = document.getElementById('nome-cartao');
const numeroCartao = document.querySelector('.card-front h2');
const mesValidade = document.getElementById('mes');
const anoValidade = document.getElementById('ano');
const codigoSeguranca = document.querySelector('.card-back span');

const erroNumeroCartao = document.getElementById('numero-cartao-erro')

const inputNome = document.getElementById('nome');
const inputNumeroCartao = document.getElementById('numero-cartao');
const inputMes = document.getElementById('data-mes');
const inputAno = document.getElementById('data-ano');
const inputCodigoSeguranca = document.getElementById('codigo');


inputNome.addEventListener('keyup', handleKeyup);

function handleKeyup(e) {
    const nomeDigitado = e.target.value;
    mudarNomeCartao(nomeDigitado);
};

function mudarNomeCartao(nomeDigitado) {
    if (inputNome.value.length > 0) {
        nomeCartao.innerText = nomeDigitado.toUpperCase()
    } else {
        nomeCartao.innerText = 'JULIETTE DO BBB';
    }
};

inputNumeroCartao.addEventListener('keyup', handleKeyupNumeroCartao);

function handleKeyupNumeroCartao(e) {
    const numeroDigitado = e.target.value;
    mudarNumeroCartao(numeroDigitado);
};

function mudarNumeroCartao(numeroDigitado) {
    const regexp = /(\d{4}[\s-.,]?)(\d{4}[\s-.,]?)(\d{4}[\s-.,]?)(\d{4})/g

    if (!+inputNumeroCartao.value) {
        erroNumeroCartao.innerText = 'Insira um número válido'
        erroNumeroCartao.classList.add('erro');
    };

    if (inputNumeroCartao.value.length === 0) {
        erroNumeroCartao.outerText = ''
        numeroCartao.innerText = '0000 0000 0000 0000'
    } else {

        const numeroDigitadoAlterado = numeroDigitado.replace(regexp, '$1 $2 $3 $4');
        numeroCartao.innerText = numeroDigitadoAlterado;
    };
};

inputMes.addEventListener('keyup', handleKeyupMes);

function handleKeyupMes(e) {
    const mesDigitado = e.target.value;
    mudarMesCartao(mesDigitado);
};

function mudarMesCartao(mesDigitado) {
    if (inputMes.value.length > 0) {
        mesValidade.innerText = mesDigitado;
    } else {
        mesValidade.innerText = '00';
    };
};

inputAno.addEventListener('keyup', handleKeyupAno);

function handleKeyupAno(e) {
    const anoDigitado = e.target.value;
    mudarAnoCartao(anoDigitado);
};

function mudarAnoCartao(anoDigitado) {
    if (inputAno.value.length > 0) {
        anoValidade.innerText = anoDigitado;
    } else {
        anoValidade.innerText = '00';
    };
};

inputCodigoSeguranca.addEventListener('keyup', handleKeyupCVC);

function handleKeyupCVC(e) {
    const codigoDigitado = e.target.value;
    mudarCodigoCartao(codigoDigitado);
};

function mudarCodigoCartao(codigoDigitado) {
    if (inputCodigoSeguranca.value.length > 0) {
        codigoSeguranca.innerText = codigoDigitado;
    } else {
        codigoSeguranca.innerText = '000';
    }
};

const botao = document.querySelector('button');

botao.addEventListener('click', handleButton);

function handleButton() {

}