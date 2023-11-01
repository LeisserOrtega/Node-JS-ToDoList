import express from "express"
import routers from './routers/routers.js'
import { connection } from './db_conecction.js'


const app = express();
const port = process.env.PORT ?? 3000;

// Decirle al servidor que en la carpeta PUBLICA estaran todos nuestros assets (css, imagenes, js, etc)
app.use(express.static(process.cwd() + '/public'))

connection();

// Inicia la app
app.use(routers)

process.on('SIGTERM', function handleSigterm() {
  server.close();});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 