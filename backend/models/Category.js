import mongoose from 'mongoose'

const Category = new mongoose.Schema({
    category:{type: String, required: true, unique:true}
})

export default new mongoose.model("Categories", Category)