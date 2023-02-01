import {Router} from "express";
import { addProduct, apdateProduct, deleteProduct, getAllProduct, getProductByID, priceGT_2500 } from "./controller/product.js";
const productRouter = Router();
productRouter.post('/product',addProduct)
productRouter.get('/products',getAllProduct)
productRouter.get('/product/searshprice',priceGT_2500)
productRouter.get('/product/:id',getProductByID)
productRouter.put('/product/:id',apdateProduct)
productRouter.delete('/product/:id',deleteProduct)
export default productRouter;