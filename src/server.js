import express from "express"
import router from "./routes/routes.js"

const server = express()
const port = 3000

server.use(express.json())

server.use(router);

server.listen(port, ()=>{
    console.log(`Running webserver at port: ${port}`)
})