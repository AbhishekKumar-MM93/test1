import express from "express";
import {
    createUser,
    getAlluser,
    getuser,
    deleteUser,
    updateUser
} from "../controllers/userControllers.js";

const router = express.Router()



router.post('/', createUser)
router.get('/', getAlluser)
router.get('/:id', getuser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
export default router