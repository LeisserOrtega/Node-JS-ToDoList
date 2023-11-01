import { TodoListTareas } from '../models/todo.js'

export const allList = async (req, res) => { 
    try {
        const arrayTareas = await TodoListTareas.find()
        console.log(arrayTareas)
    } catch(e) {
        console.log(e)
    }
}

