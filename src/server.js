import express, { response } from 'express'
import manager from './managers/script.js'
import cart from './managers/carts.js'
import router from './router/index_router.js'
import errorHandler from './middlewares/errorHandler.js'
import not_found_handler from './middlewares/notFoundHandler.js'

let server = express()

let PORT = 8080

let ready = () => console.log('server ready on port: '+PORT)

server.listen (PORT,ready)
server.use('/public',express.static('public'))
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/',router)
server.use(errorHandler)
server.use(not_found_handler)

// let index_route = '/'
// let index_function = (req,res)=>{
//    let products =  manager.getProducts().length
//    console.log(products)
//    return res.send('probando')
// }
// server.get(index_route,index_function)

// let one_route = '/api/products/:id'
// let one_function = (req,res)=>{
//     let parametros = req.params
//     let id = Number(parametros.id)
//     //console.log(id)
//     //console.log(typeof id)
//     let one = manager.getProductById(id)
//     //console.log(one)
//     if(one){
//         return res.send({
//             success: true,
//             response: one
//         })
//     }else{
//         return res.send({
//             success: false,
//             response: 'not found'
//         })
//     }
// }
// server.get(one_route,one_function)

// let query_route = '/api/products'
// let query_function = (req,res) => {
//     let limit = req.query.limit ?? 10
//     let products = manager.getProducts().slice(0,limit)
//     if(products.length>0){
//         return res.send({
//             success: true,
//             products
//         })
//     }else{
//         return res.send({
//             success: false,
//             products: 'not found'
//         })
//     }
// }
// server.get(query_route,query_function)

// let cart_route = '/api/carts/:cid'
// let cart_function = (req,res)=>{
//     let parametros = req.params
//     let id = Number(parametros.id)
//     //console.log(id)
//     //console.log(typeof id)
//     let one = cart.getCartById(id)
//     console.log(one)
//     if(one){
//         return res.send({
//             success: true,
//             response: one
//         })
//     }else{
//         return res.send({
//             success: false,
//             response: 'not found'
//         })
//     }
// }
// server.get(cart_route,cart_function)

// let carts_route = '/api/carts'
// let carts_function = (req,res) => {
//     let limit = req.query.limit ?? 10
//     let products = cart.getCarts().slice(0,limit)
//     if(products.length>0){
//         return res.send({
//             success: true,
//             products
//         })
//     }else{
//         return res.send({
//             success: false,
//             products: 'not found'
//         })
//     }
// }
// server.get(carts_route,carts_function)

// server.post(
//     '/api/products', 
//     async (req,res)=>{
//         try{
//             let title = req.body.title ?? null
//             let description = req.body.description ?? null
//             let price = req.body.price ?? null
//             let thumbnail = req.body.thumbnail ?? null
//             if(title&&description&&price&&thumbnail){
//                 let product = await manager.addProduct({title,description,price,thumbnail})
//                 return res.json({
//                     status: 201,
//                     product_id : product.id,
//                     masssage: 'created!'
//                 })
//             }else{
//                 return res.json({
//                     status: 400,
//                     message: 'check data!'
//                 })
//             }
//         }catch(error){
//             console.log(error)
//             return res.json({
//                 status: 500,
//                 massage: 'error'
//             })
//         }
//     }
// )

// server.put(
//     '/api/products/:id',
//     (req,res)=>{
//         if(req.body&&req.params.id){
//             let id = Number(req.params.id)
//             let data = req.body
//             manager.updateProduct(id,data)
//             return res.json({
//                 status: 200,
//                 massage: 'product updated!'
//             })
//         }else{
//             return res.json({
//                 status:400,
//                 massage: 'check data!'
//             })
//         }
//     }
// )




