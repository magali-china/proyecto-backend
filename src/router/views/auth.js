import { Router } from "express";

const auth_router = Router()

auth_router.get(
    '/register',
    async(req,res,next)=>{
        try{
            return res.render(
                'register',
                {title: ' auth form'}
            )
        }catch(error){
            next()
        }
    }
)

export default auth_router 