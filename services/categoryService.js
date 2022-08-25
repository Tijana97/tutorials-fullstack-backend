import mongoose from "mongoose"
import Category from "../models/categoryModel"


export const validNameOfTheCategory = async(name) => {
    const category = await Category.findOne({
        name,
    });
    if(category) throw new Error(`The item with the name ${name} already exists!`)
    return;
}

const getOneCategory = async(id) => {
try{
    return await Category.findOne({
        _id : mongoose.Types.ObjectId(id)
})
} catch(e){
    console.log(e.message)
}
}


const createOneCategory = async(data) => {
    await validNameOfTheCategory(data.name)
    if(data.name === '') throw new Error(`Category must have a name.`)
    console.log(data)
    return await Category.create({
        ...data
})
}


const updateOneCategory = async(id, data) => {
    await validNameOfTheCategory(data.name)
    if(data.name === '') throw new Error(`Category must have a name.`)
    if(data.name === '') throw new Error(`Category must have a name.`)
    try{
        return await Category.updateOne({
            _id : mongoose.Types.ObjectId(id)
    },
    {
        $set: {
            ...data
    
        }
    },
    {
        upsert:true
    })
    } catch(e){
        console.log(e.message)
    }
    }


const deleteOneCategory = async(id) => {

    try{
        return await Category.deleteOne({
            _id : mongoose.Types.ObjectId(id)        
    })
    } catch(e){
        console.log(e.message)
    }
}


const getAllCategories = async() => {
    try{
        return await Category.find({})
    } catch(e){
        console.log(e.message)
    }
}


const categoryServiceHandler = {
    getOneCategory,
    createOneCategory, 
    updateOneCategory, 
    deleteOneCategory, 
    getAllCategories
}

export default categoryServiceHandler