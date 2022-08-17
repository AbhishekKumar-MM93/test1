import express from 'express'
import { createCategory, getAllCategory } from '../controllers/categoryController.js'

const categoryRouter = express.Router()


categoryRouter.post('/', createCategory),
categoryRouter.get('/', getAllCategory)

export default categoryRouter