var botoes = document.querySelector('div#botoes')
var semaforo = document.querySelector('img#imgSemaforo')
let indexCor = 0
let idIntervalo = null

const auto = () => {
    const cores = ['verde', 'amarelo', 'vermelho']
    ++indexCor
    if (indexCor > 2) {
        indexCor = 0
    }
    ligar[cores[indexCor]]()
}

const alterarDados = (event) => {
    clearInterval(idIntervalo)
    ligar[event.target.id]()
}


const ligar = {
    'verde': () => semaforo.src = 'images/verde.png',
    'amarelo': () => semaforo.src = 'images/amarelo.png',
    'vermelho': () => semaforo.src = 'images/vermelho.png',
    'auto': () => idIntervalo =  setInterval(auto, 1000)
}

botoes.addEventListener('click', alterarDados)

