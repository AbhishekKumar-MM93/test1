import mongoose  from "mongoose";

const SubCategory = new mongoose.Schema({

categoryFK: {type:mongoose.Schema.Types.ObjectId, ref:"Categories"},
 subCategory: {type:String, require: true}
})

export default new mongoose.model("SubCategories", SubCategory)
