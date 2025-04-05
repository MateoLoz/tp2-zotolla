// backend.js
const db = require('./database');

function validarYGuardarTarea(tarea) {
  if (!tarea || tarea.trim() === '') {
    return "Error: La tarea no puede estar vacía.";
  }

  db.guardarTarea(tarea);
  return `Tarea guardada: ${tarea}`;
}

module.exports = { validarYGuardarTarea };
