import Product from '../models/Product.js'

async function createProduct(req, res) {
    try {
        let result = await Product.create(req.body)
        res.status(201).send({
            sucess: result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getAllProduct(req, res) {
    try {
        let total = await Product.find().count()
        let result = await Product.find()
        res.status(200).send({
             total,result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getProduct(req, res) {
    try {
        let id = req.params.id
        let result = await Product.findById(id)
        res.status(200).send({
            result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function updateProduct(req, res) {
    try {
        let id = req.params.id
// console.log(id)
        let result = await Product.findByIdAndUpdate(id, req.body)
        res.status(200).send({
            sucess: true,
            result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function deleteProduct(req, res) {
    try {
        let result = await Product.deleteOne({
            _id: req.params.id
        })
        res.status(200).send({
            Sucess: "Product deleted",
            result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
}