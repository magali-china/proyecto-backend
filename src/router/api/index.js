import { Router } from "express";
import products_router from './product.js'
import cart_router from './carts.js' 

const api_router = Router()

api_router.use('/products',products_router)
api_router.use('/carts', cart_router)

export default api_router

//enrutador principal de la API (para enviar datos)
// aca solamnete llamo al enrutador de los recursos(product,cart,user)