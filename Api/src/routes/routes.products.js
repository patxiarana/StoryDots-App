import  {Router} from 'express';
import { getProducts, createProducts,updateProducts,deleteProducts } from '../controllers/product.controllers.js';


const router = Router()

router.get('/products/', getProducts)
router.post('/products/',createProducts)
router.put('/products/:id',updateProducts)
router.delete('/products/:id',deleteProducts)







export default router;