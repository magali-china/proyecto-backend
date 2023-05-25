import { Router} from "express";
import api_router from "./api/index.js"
import views_router from './views/index.js'
import messages_router from "./views/messages.js";

const router = Router()

router.use('/api',api_router)
router.use('/', views_router)
router.use('/chat', messages_router)

export default router

//enrutador principal de la aplicacion
//aca solamente llamo al enrutador de la API
//y al enrrutador de las vistas