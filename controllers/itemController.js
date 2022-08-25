import itemServiceHandler from "../services/itemService"

const getOneItem = async(req, res) => {
    try{
        const {params} = req
        const item = await itemServiceHandler.getOneItem(params.id)
        return res.send(item)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const createOneItem = async(req, res) => {
    try{
        const {body} = req
        const item = await itemServiceHandler.createOneItem(body)
        return res.send(item)

    }catch(e){
        console.log("testbest", e.message)
        return res.send ({msg: "Internal Server Error"}).status(500)
    }
}


const updateOneItem = async(req, res) => {
    try{
        const {params, body} = req
        const item = await itemServiceHandler.updateOneItem(params, body)
        return res.send(item)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const deleteOneItem = async(req, res) => {
    try{
        const {params} = req
        const delItem = await itemServiceHandler.deleteOneItem(params.id)
        return res.send(delItem)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const getAllItems = async(req, res) => {
    try{
        const item = await itemServiceHandler.getAllItems()
        return res.send(item)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const itemController = {
    getOneItem,
    createOneItem, 
    updateOneItem, 
    deleteOneItem, 
    getAllItems
}

export default itemController