let voltar = document.getElementById('btnAnt')
let avancar = document.getElementById('btnProx')
let foto = document.getElementById('imagem')
let indexFoto = 0

function avancarFoto() {
    indexFoto++
    if(indexFoto == 4)
        indexFoto = 0
    foto.src = `images/${indexFoto}.jpg`
}

function voltarFoto() {
    indexFoto--
    if(indexFoto < 0){
        indexFoto = 3
    }
    foto.src = `images/${indexFoto}.jpg`
}

avancar.addEventListener("click", avancarFoto)
voltar.addEventListener("click", voltarFoto)
