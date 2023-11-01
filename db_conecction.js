import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

const url_db = process.env.DB_URL

// Conectar a la Base de datos
export const connection = async () => await
mongoose.connect(url_db,
  {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then( () => {
    console.log('Conexion establecida')
  })
  .catch(e => {
    console.log(e)
  })

