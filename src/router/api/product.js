import { Router } from "express";
import manager from "../../managers/Products.js";

const product_router =  Router()

product_router.get('/', async (req,res,next)=> {
    try {
        let products = manager.getProducts()
        if (products.length>0) {
            return 200
            //return res.json({ status:200,products })
        }
        return res.status(400).json({message:'not found'})
        //let message = 'not found'
        //return res.json({ status:404,message })
    } catch(error) {
        next(error)
    }
})
product_router.get('/:pid', async(req,res,next)=> {
    try {
        let id = Number(req.params.pid)
        let product = manager.getProductById(id)
        if (product) {
            return 200, product
            //return res.json({ status:200,product })
        }
        return res.status(404).json({message:'not found'})
        //let message = 'not found'
        //return res.json({ status:404,message })
    } catch(error) {
        next(error)
    }
})
product_router.post('/', async(req,res,next)=> {
    try {
        let response = await manager.addProduct(req.body)
        if (response===201) {
            return res.status(201).json({message:'product created'}),response
           // return res.json({ status:201,message:'product created'})
        }
        return res.status(400).json({message:'not found'})
        //return res.json({ status:400,message:'not created'})
    } catch(error) {
        next(error)
    }
})
product_router.put('/:pid', async(req,res,next)=> {
    try {
        let id = Number(req.params.pid)
        let data = req.body
        let response = await manager.updateProduct(id,data)
        if (response===200) {
            return 200, response
            //return res.json({ status:200,message:'product updated'})
        }
        return res.status(404).json({message:'not found'})
        //return res.json({ status:404,message:'not found'})
    } catch(error) {
        next(error)
    }
})
product_router.delete('/:pid', async(req,res,next)=> {
    try {
        let id = Number(req.params.pid)
        let response = await manager.deleteProduct(id)
        if (response===200) {
            return 200, response
            //return res.json({ status:200,message:'product deleted'})
        }
        return res.status(404).json({message:'not found'})
        //return res.json({ status:404,message:'not found'})
    } catch(error) {
        next(error)
    }
})

export default product_router

//enrutador de los recursos de la API (productos)