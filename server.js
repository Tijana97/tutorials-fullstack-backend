import express from "express"
import "dotenv/config"

const server = express()
import cors from "cors"
const port = 8000
import testRouter from "./routers/testRouter"
import categoryRouter from "./routers/categoryRouter"
import subCategoryRouter from "./routers/subCategoryRouter"
import itemRouter from "./routers/itemRouter"
import mongoose from "mongoose"

const init = () =>{

    server.use(express.json())
    server.use(cors())

    server.use("/test", testRouter)
    server.use("/category", categoryRouter)
    server.use("/subcategory", subCategoryRouter)
    server.use("/item", itemRouter)

    server.listen(port, () =>{
        console.log(`Listening on the port ${port}`)
    })
}


const startServer = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
    }, async err =>{
        if(err){
            console.log("There was a problem connecting to the Database")
            return
        }
        console.log("Successfully connected to Database")
        init()
    }
)}

startServer();