import { Router } from "express";
//import { allList } from "../controllers/all.todo.js"
import { landing_page } from '../controllers/home.js'

const router = Router()

router.get('/', landing_page)

//router.get('/tareas', allList)

export default router