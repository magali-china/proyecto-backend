import { Router } from "express";
import auth_router from "./auth.js";
import messages_router from "./messages.js";
import manager from '../../managers/Products.js'

const views_router = Router()

views_router.get(
    '/',
    async (req,res,next) =>{
        try {
            return res.render(
                'index', 
                {
                    name: 'maga',
                    //last_name: 'borraz',
                    productos: manager,
                    title: 'index',
                    script: '/connection.js'
                }
            )
        } catch (error) {
            next(error)
        }
    }
)

views_router.get(
    '/new_product',
    async(req,res,next) => {
        try {
            return res.render(
                'new_product',
                {   title: 'new_product',
                    script: '/public/connection.js',
                    title: 'Product' }
            )
        } catch (error) {
            next()
        }
    }
)

views_router.get(
    '/chat',
    async(req,res,next) => {
        try {
            return res.render(
                'chat',
                {   title: 'chat',
                    script: '/public/script/chat.js',
                    title: 'chat' 
                }
            )
        } catch (error) {
            next()
        }
    }
)

views_router.use('/auth', auth_router)
views_router.use("/chat",messages_router)


//views_router.use('/products', product_router)
//views_router.use('/carts'), cart_router)

export default views_router