import  {Router} from 'express';
import { getProducts, createProducts,updateProducts,deleteProducts } from '../controllers/product.controllers.js';
import express from "express"
//cors config
import cors from "cors"
// cors module
const app = express()

const router = Router()

router.get('/products/', getProducts)
router.post('/products/',createProducts)
router.put('/products/:id',updateProducts)
router.delete('/products/:id',deleteProducts)







export default router;