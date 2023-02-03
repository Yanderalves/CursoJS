const btnDecrementar = document.querySelector('#btn-decrementar');
const btnIncrementar = document.querySelector('#btn-incrementar');
const numeroAtual = document.querySelector('#numero-atual');

const updateNumber = (value) => {
    numeroAtual.innerHTML = parseInt(numeroAtual.innerHTML) + value;
    if(parseInt(numeroAtual.innerHTML) < 0){
        numeroAtual.style.color = 'red';
    }else{
        numeroAtual.style.color = 'black';
    }
};

btnIncrementar.addEventListener('click', function(){ // Usando function
    updateNumber(1)
});


btnDecrementar.addEventListener('click', () => updateNumber(-1)); // usando arrow function



