import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema ({
name:{type: String },
price:{type: Number },
color: { type: String },
    subCategoryFK: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategories"}


})

export default new mongoose.model("Products", ProductSchema )