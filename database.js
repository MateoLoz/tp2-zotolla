// database.js
const tareas = [];

export default function guardarTarea(tarea) {
  tareas.push(tarea);
}

function obtenerTareas() {
  return tareas;
}


