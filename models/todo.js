// todo = to-do = por hacer = tarea
import mongoose from "mongoose";

// Nuestro esquema que accesede a la base de datos
const todoSchema = new mongoose.Schema({
    usuario_creador: String,
    tarea: String,
    asignada: String
})

export const TodoListTareas = mongoose.model('Model', todoSchema, 'todolists')



