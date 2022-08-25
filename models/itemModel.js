import mongoose from "mongoose"
const { Schema } = mongoose;

const ItemSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    subCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Subcategory'
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
    })


const Item = mongoose.model("Item", ItemSchema)

export default Item