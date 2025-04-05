// database.js
const tareas = [];

function guardarTarea(tarea) {
  tareas.push(tarea);
}

function obtenerTareas() {
  return tareas;
}

module.exports = { guardarTarea, obtenerTareas };
