import express from "express"
const server = express()
import cors from "cors"
const port = 8000

const init = () =>{

    server.use(express.json())
    server.use(cors())

    server.listen(port, () =>{
        console.log(`Listening on the port ${port}`)
    })
}


init();