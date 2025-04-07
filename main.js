// main.js

import validarYGuardarTarea from "./back-end.js"

function handleform(e) {
    e.preventDefault()
    let tareaText = document.getElementById('title').value
    let tareadesc = document.getElementById('descrip').value
    let tarea = `${tareaText} ${tareadesc}`
    let res = validarYGuardarTarea(tarea)
    showTarea(tarea)
}

function showTarea  (mensaje) {
   let container = document.getElementById('tareas-container')
   let span = document.createElement("span")
   span.innerHTML = mensaje
   container.appendChild(span)

} 
document.getElementById('form').addEventListener('submit', handleform)
