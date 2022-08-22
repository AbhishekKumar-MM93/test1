import express from "express";
import dotenv from 'dotenv';
import connectDB from "./connectdb.js";
import router from "./routes/userRoutes.js";
import authRoute from "./routes/authRoute.js";
import multer from 'multer'
import cors from 'cors'
import categoryRouter from "./routes/categoryRoute.js";
import subCategoryRouter from "./routes/subCategoryRouter.js"
import productRouter from "./routes/productRoute.js";

const upload = multer()
const app = express()
dotenv.config()
app.use(cors());
app.use(express.json())
app.use(upload.array());

connectDB();

// <--------------Router------------->
app.use('/user', router)
app.use('/auth', authRoute)
app.use('/category', categoryRouter)
app.use('/subCategory', subCategoryRouter)
app.use('/products', productRouter)
// <------------------------------------------------>
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})


// {
//     "name" : "cql",
//     "age" : 23,
//     "email" : "cql@sys.com",
//     "password": "cqlsys"
// }