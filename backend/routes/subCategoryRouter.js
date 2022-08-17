import express from 'express'
import {
    createSubCategory,
    getAllSubCategory,
} from '../controllers/subcategory.js'
const subCategoryRouter = express.Router()

subCategoryRouter.post('/', createSubCategory)
subCategoryRouter.get('/', getAllSubCategory)

export default subCategoryRouter