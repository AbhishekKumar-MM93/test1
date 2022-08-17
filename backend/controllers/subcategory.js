import SubCategory from "../models/SubCategory.js"

async function createSubCategory(req, res) {
    try {
        let result = await SubCategory.create(req.body)
        res.status(201).send({
            sucess: true,
            result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}


async function getAllSubCategory(req, res) {
    try {
        let total = await SubCategory.find().count()
        let result = await SubCategory.find().populate("categoryFK")
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


export {
    createSubCategory,
    getAllSubCategory
}