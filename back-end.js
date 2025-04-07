// backend.js
import  guardarTarea  from './database.js'

export default function validarYGuardarTarea(tarea) {
  if (!tarea || tarea.trim() === '') {
    return "Error: La tarea no puede estar vacía.";
  }

  db.guardarTarea(tarea);
  return `Tarea guardada: ${tarea}`;
}


