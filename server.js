import express from "express"
const server = express()
import cors from "cors"
const port = 8000
import testRouter from "./routers/testRouter"

const init = () =>{

    server.use(express.json())
    server.use(cors())

    server.use("/test", testRouter)

    server.listen(port, () =>{
        console.log(`Listening on the port ${port}`)
    })
}


init();