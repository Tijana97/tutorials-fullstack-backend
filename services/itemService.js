import mongoose from "mongoose"
import Item from "../models/itemModel"
import Subcategory from "../models/subCategoryModel"



export const validateSubCategory = async(subCategoryID) => {
    const subCategory = await Subcategory.findOne({_id: mongoose.Types.ObjectId(subCategoryID)})
    if(!subCategory) throw new Error(`SubCategory with the id ${subCategoryID} does not exists!`)
    return subCategory._id
}

export const validNameOfTheItem = async(name) => {
    const item = await Item.findOne({
        name,
    });
    if(item) throw new Error(`The item with the name ${name} already exists!`)
    return;
}

const getOneItem = async(id) => {
try{
    return await Item.findOne({
        _id : mongoose.Types.ObjectId(id)
})
} catch(e){
    console.log(e.message)
}
}


const createOneItem = async(data) => {
    const scid = await validateSubCategory(data.subCategoryID)
    await validNameOfTheItem(data.name)
    if(data.name === '') throw new Error(`Item must have a name.`)
    if(data.quantity < 0 ) throw new Error(`Quantity of the item must be greater or equal to 0!`)
    if(data.price < 0 ) throw new Error(`Price of the item must be greater or equal to 0!`)
    console.log(data)
    return await Item.create({
        ...data, 
        subCategoryId: scid
})
}


const updateOneItem = async(id, data) => {

    if(data.name === '') throw new Error(`Item must have a name.`)
    if(data.quantity < 0 ) throw new Error(`Quantity of the item must be greater or equal to 0!`)
    if(data.price < 0 ) throw new Error(`Price of the item must be greater or equal to 0!`)
    const scid = await validateSubCategory(data.subCategoryID)
    try{
        return await Item.updateOne({
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


const deleteOneItem = async(id) => {

    try{
        return await Item.deleteOne({
            _id : mongoose.Types.ObjectId(id)        
    })
    } catch(e){
        console.log(e.message)
    }
}


const getAllItems = async() => {
    try{
        return await Item.find({})
    } catch(e){
        console.log(e.message)
    }
}


const itemServiceHandler = {
    getOneItem,
    createOneItem, 
    updateOneItem, 
    deleteOneItem, 
    getAllItems
}

export default itemServiceHandler