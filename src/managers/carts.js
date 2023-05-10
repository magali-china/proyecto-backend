import fs from 'fs'

class CartManager{
    constructor(path){
        this.carts = []
        this.path = path
        this.init(path)
    }
    init(path){     
        let file = fs.existsSync(path)
        if (!file){
            fs.writeFileSync(path,'[]')
                //console.log('file created at path: ' +this.path)
                return 'file created at path: ' +this.path
        }else{
            this.carts = JSON.parse(fs.readFileSync(path, 'utf-8'))
            //console.log('data recovered')
            return 'data recovered'
        }
    }
    async addCart({pid,quantity}){
        try{
            let products = {pid,quantity}
            let data = {products}
            if(this.carts.length>0){
                let next_id = this.carts[this.carts.length-1].id+1
                data.id = next_id
            }else{
                data.id= 1
            }
            this.carts.push(data)    
            let data_json = JSON.stringify(this.carts,null,2) 
             await fs.promises.writeFile(this.path,data_json)
            //console.log('id´s created product: ' +data.id)
            return 'id´s carts: '+data.id
        }catch (error){
            console.log(error)
            return 'addCarts: error'
        }
            
    }
    getCarts(){
        try{
            if(this.carts.length){
            return this.carts
            }else{
               return 'Not found'
            }
        }catch(error){
            return 'getCart: error'
        }
    }
     getCartById(id){
        try{
            let one = this.carts.find (each =>each.id===id)
            if(one){
               return one
            }else{
                return'Not found'
            }
        }catch(error){
            return 'getCartById: error'
        }
    }
}

let cart = new CartManager('./src/data/cart.json')
async function carts(){
    await cart.addCart({pid:9,quantity:9})
    await cart.getCartById(5)

}

//carts()

export default cart
