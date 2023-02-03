let botaoAdd = document.querySelector('#btn-add-tarefa');
let containerTarefas = document.querySelector('.container-tarefas');

function addTarefa(){
    let inputTarefas = document.querySelector('#input-tarefas');
    let valorTarfea = inputTarefas.value;
    let tarefa = `<div class="tarefa">
                        <input type="checkbox" name="${valorTarfea}">
                        <label for="">${valorTarfea}</label>
                   </div>`
    containerTarefas.innerHTML += tarefa;
}

// function concluirTarefa(){
//     console.log(checkbox.className);
// }

// let checkbox = document.querySelector("input[type='checkbox']");
// checkbox.addEventListener("click", concluirTarefa);
//   if (checkbox.checked) {
    
//   } else {
//     console.log("Checkbox desmarcado");
//   }
// });


// botaoAdd.addEventListener('click', addTarefa);