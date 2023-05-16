import { Router } from "express";
import auth_router from "./auth.js";

const router = Router()

router.get(
    '/',
    async (req,res,next) =>{
        try {
            return res.render(
                'index', 
                {
                    name: 'igna',
                    //last_name: 'borraz',
                    alumnos: [
                        {name:'nico', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80'},
                        {name:'ale', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80'},
                        {name:'flor', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80'}
                    ],
                    title: 'index',
                    script: '/public/conection.js'
                }
            )
        } catch (error) {
            next(error)
        }
    }
)

router.use('/auth', auth_router)


//router.use('/products', product_router)
//router.use('/carts'), cart_router)

export default router