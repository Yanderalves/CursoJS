let inputTarefa = document.getElementById('inputTarefa');
let containerPrincipal = document.getElementById('containerTarefas');

let contador = 0;


function AdicionarTarefa() {
    let valorTarefa = inputTarefa.value;

    if (!(["", null, undefined].includes(valorTarefa))) {
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="MarcarTarefa(${contador})" class="itemIcone">
                <i id="icone${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div class="itemTexto">
                ${valorTarefa}
            </div>
            <div class="itemBotao">
                <button onclick="DeletarTarefa(${contador})" class="btnDeletar">
                    <i class="mdi mdi-delete"></i>
                    Deletar
                </button>
            </div>
         </div>`

        containerPrincipal.innerHTML += novoItem;
        contador++;

        inputTarefa.value = "";
        inputTarefa.focus();
    } else {
        alert("Tarefa inválida")
    }
}

function DeletarTarefa(id) {
    let elemento = document.getElementById(id);
    elemento.remove();
}

function MarcarTarefa(id) {
    let item = document.getElementById(id);
    let classeAtual = item.getAttribute('class');

    if (classeAtual === 'item') {
        item.classList.add('marcado')
        document.getElementById(`icone${id}`).setAttribute('class', 'mdi mdi-check-circle')
    } else {
        item.classList.remove('marcado')
        document.getElementById(`icone${id}`).setAttribute('class', 'mdi mdi-circle-outline')
    }
}

inputTarefa.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementsByClassName('btnAdd')[0].click()
    }
})