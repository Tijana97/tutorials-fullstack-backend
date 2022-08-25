import categoryServiceHandler from "../services/categoryService"

const getOneCategory = async(req, res) => {
    try{
        const {params} = req
        const category = await categoryServiceHandler.getOneCategory(params.id)
        return res.send(category)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const createOneCategory = async(req, res) => {
    try{
        const {body} = req
        const category = await categoryServiceHandler.createOneCategory(body)
        return res.send(category)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const updateOneCategory = async(req, res) => {
    try{
        const {params, body} = req
        const category = await categoryServiceHandler.updateOneCategory(params, body)
        return res.send(category)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const deleteOneCategory = async(req, res) => {
    try{
        const {params} = req
        const delCat = await categoryServiceHandler.deleteOneCategory(params.id)
        return res.send(delCat)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const getAllCategories = async(req, res) => {
    try{
        const category = await categoryServiceHandler.getAllCategories()
        return res.send(category)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const categoryController = {
    getOneCategory,
    createOneCategory, 
    updateOneCategory, 
    deleteOneCategory, 
    getAllCategories
}

export default categoryController