import { Router} from "express";
import api_router from "./api/index.js"
//import views_router from './views/index.js'

const index_router = Router()

index_router.use('/api',api_router)
//views_router.use('/', views_router)

export default index_router

//enrutador principal de la aplicacion
//aca solamente llamo al enrutador de la API
//y al enrrutador de las vistas