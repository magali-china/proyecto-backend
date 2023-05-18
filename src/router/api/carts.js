import { Router } from "express";
import cart from "../../managers/Carts.js";

const cart_router = Router()

cart_router.get('/', async(req,res,next)=> {
    try {
        let all = cart.getCarts()
        if (all.length>0) {
            return 200,all
            //return res.json({ status:200,all })
        }
        return res.status(404).json({message:'not found'})
        //let message = 'not found'
        //return res.json({ status:404,message })
    } catch(error) {
        next(error)
    }
})
cart_router.get('/:cid', async(req,res,next)=> {
    try {
        let id = Number(req.params.cid)
        let one = cart.getCartById(id)
        if (one) {
            return 200, one
            //return res.json({ status:200,one })
        }
        return res.status(404).json({message:'not found'})
        //let message = 'not found'
        //return res.json({ status:404,message })
    } catch(error) {
        next(error)
    }
})
cart_router.post('/', async(req,res,next)=> {
    try {
        let response = await cart.addCart(req.body)
        if (response===201) {
            return res.status(201).json({message:'cart created'}), response 
            //return res.json({ status:201,message:'cart created'})
        }
        return res.status(404).json({message:'not found'})
        //return res.json({ status:400,message:'not created'})
    } catch(error) {
        next(error)
    }
})
cart_router.put('/:cid', async(req,res,next)=> {
    try {
        let id = Number(req.params.cid)
        let data = req.body
        let response = await cart.updateCarts(id,data)
        if (response===200) {
            return res.status(200).json({message:'cart updated'}), response 
            //return res.json({ status:200,message:'cart updated'})
        }
        return res.status(404).json({message:'not found'})
        //return res.json({ status:404,message:'not found'})
    } catch(error) {
        next(error)
    }
})

cart_router.put('/:cid/product/:pid/:units', async(req,res,next)=>{
    try{
        let pid = Number(req.params.pid)
        let cid= Number(req.params.cid)
        let units = Number(req.params.units)
        let response = await cart.updateCarts(pid,cid,units)
        if(response===200){
            return res.status(200).json({message:'cart created'}), response 
        }
        return res.status(404).json({message:'not found'})
    }catch(error){
        next(error);
    }
})
cart_router.delete('/:cid', async(req,res,next)=> {
    try {
        let id = Number(req.params.cid)
        let response = await cart.deleteCart(cid)
        if (response===200) {
            return 200, response
            //return res.json({ status:200,message:'cart deleted'})
        }
        return res.status(404).json({message:'not found'})
        //return res.json({ status:404,message:'not found'})
    } catch(error) {
        next(error)
    }
})

cart_router.delete('/:cid/product/:pid/:units', async (req, res, next) => {
    try {
        let id = Number(req.params.pid)
        let cid = Number(req.params.cid);
        let units = Number(req.params.units);
        let response = await cart.delete_cart(cid, id, units);
        if (response === 200) {
            return res.status(200).json({message:'cart delete'}), response 
        }
        return res.status(404).json({message:'not found'})
    } catch (error) {
        next(error);
    }
})

export default cart_router

