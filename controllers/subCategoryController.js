import subCategoryServiceHandler from "../services/subCategoryService"

const getOneSubcategory = async(req, res) => {
    try{
        const {params} = req
        const subcategory = await subCategoryServiceHandler.getOneSubategory(params.id)
        return res.send(subcategory)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const createOneSubcategory = async(req, res) => {
    try{
        const {body} = req
        const subcategory = await subCategoryServiceHandler.createOneSubcategory(body)
        return res.send(subcategory)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const updateOneSubcategory = async(req, res) => {
    try{
        const {params, body} = req
        const subcategory = await subCategoryServiceHandler.updateOneSubcategory(params, body)
        return res.send(subcategory)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const deleteOneSubcategory = async(req, res) => {
    try{
        const {params} = req
        const delSubcat = await subCategoryServiceHandler.deleteOneSubcategory(params.id)
        return res.send(delSubcat)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const getAllSubcategories = async(req, res) => {
    try{
        const subcategory = await subCategoryServiceHandler.getAllSubcategories()
        return res.send(subcategory)

    }catch(e){
        return res.send ({msg: "Internal Server Error"}).status(500)

    }
}


const subCategoryController = {
    getOneSubcategory,
    createOneSubcategory, 
    updateOneSubcategory, 
    deleteOneSubcategory, 
    getAllSubcategories
}

export default subCategoryController