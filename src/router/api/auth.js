import { Router } from "express"
import uploader from '../../middlewares/multer.js'
import manager from "../../managers/User.js"

const auth_router = Router()

auth_router.post('/signup',uploader.single('file'), async(req,res,next)=> {
    const { name,last_name,age } = req.body
    try {
        if (!req.file) {
            return res.send('no se pudo cargar la imagen')
        } 
        let user = { name,last_name,age }   
        user.url_photo = req.file.path     
        await manager.add_user(user)        
        return res.json({                   
            status: 201,
            message: 'user created'
        })
    } catch(error) {
        next(error)
    }
})

export default auth_router