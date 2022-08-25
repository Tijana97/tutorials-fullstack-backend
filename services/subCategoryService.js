import mongoose from "mongoose"
import Subcategory from "../models/subCategoryModel"
import Category from "../models/categoryModel" 


export const validNameOfTheSubcategory = async(name) => {
    const subCategory = await Subcategory.findOne({
        name,
    });
    if(subCategory) throw new Error(`The item with the name ${name} already exists!`)
    return;
}

export const validateCategory = async(CategoryID) => {
    const category = await Category.findOne({_id: mongoose.Types.ObjectId(CategoryID)})
    if(!category) throw new Error(`Category  with the id ${CategoryID} does not exist`)
    return category._id
}

const getOneSubategory = async(id) => {
try{
    return await Subcategory.findOne({
        _id : mongoose.Types.ObjectId(id)
})
} catch(e){
    console.log(e.message)
}
}


const createOneSubcategory = async(data) => {
    await validNameOfTheSubcategory(data.name)
    const cid = await validateCategory(data.CategoryID)
    if(data.name === '') throw new Error(`Item must have a name.`)
    console.log(data)
    return await Subcategory.create({
        ...data
})
}


const updateOneSubcategory = async(id, data) => {
    await validNameOfTheSubcategory(data.name)
    const cid = await validateCategory(data.CategoryID)
    try{
        return await Subcategory.updateOne({
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


const deleteOneSubcategory = async(id) => {

    try{
        return await Subcategory.deleteOne({
            _id : mongoose.Types.ObjectId(id)        
    })
    } catch(e){
        console.log(e.message)
    }
}


const getAllSubcategories = async() => {
    try{
        return await Subcategory.find({})
    } catch(e){
        console.log(e.message)
    }
}


const subCategoryServiceHandler = {
    getOneSubategory,
    createOneSubcategory, 
    updateOneSubcategory, 
    deleteOneSubcategory, 
    getAllSubcategories
}

export default subCategoryServiceHandler