import  express  from "express";
import notFoundRouter from "./modules/notFound/notFound.router.js";
import productRouter from './modules/product/product.router.js';
import userRouter from "./modules/user/user.router.js";
const baseUrl = '/api/v1/'
const app = express()
app.use(express.json());
app.use(`${baseUrl}`, userRouter)
app.use(`${baseUrl}`, productRouter)
app.use(notFoundRouter)
app.listen(5000, () => {
    console.log("running...........");
}) 