import { Router } from "express";
import auth_router from "./auth.js";
import messages_router from "./messages.js";

const views_router = Router()

views_router.get(
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

views_router.use('/auth', auth_router)
views_router.use("/chat",messages_router)


//views_router.use('/products', product_router)
//views_router.use('/carts'), cart_router)

export default views_router