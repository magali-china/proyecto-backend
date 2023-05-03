import express, { response } from 'express'
import send from 'send'
import manager from './script.js'

let server = express()

let PORT = 8080

let ready = () => console.log('server ready on port: '+PORT)

server.listen (PORT,ready)
server.use(express.urlencoded({extended:true}))

let index_route = '/'
let index_function = (req,res)=>{
   let products = manager.getProducts().length
   console.log(products)
   return res.send('probando')
}
server.get(index_route,index_function)

let one_route = '/products/:id'
let one_function = (req,res)=>{
    let parametros = req.params
    let id = Number(parametros.id)
    //console.log(id)
    //console.log(typeof id)
    let one = manager.getProductById(id)
    console.log(one)
    if(one){
        return res.send({
            success: true,
            response: one
        })
    }else{
        return response.send({
            success: false,
            response: 'not found'
        })
    }
}
server.get(one_route,one_function)

let query_route = '/products'
let query_function = (req,res) => {
    let limit = req.query.limit ?? 10
    let products = manager.getProducts().slice(0,limit)
    if(products.length>0){
        return res.send({
            success: true,
            products
        })
    }else{
        return res.send({
            success: false,
            products: 'not found'
        })
    }
}
server.get(query_route,query_function)


