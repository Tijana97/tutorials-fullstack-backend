import mongoose from "mongoose"
const { Schema } = mongoose;

const SubcategorySchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    CategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
    })


const Subcategory = mongoose.model("Subcategory", SubcategorySchema)

export default Subcategory