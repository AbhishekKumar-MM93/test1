import express from 'express'
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProduct,
    updateProduct
} from '../controllers/productControllers.js'

const productRouter = express.Router()

productRouter.post('/', createProduct)
productRouter.get('/', getAllProduct)
productRouter.get('/:id', getProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter