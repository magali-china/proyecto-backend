//const fs= require('fs')
import fs from 'fs'

class ProductManager{
    constructor(path){
        this.products = []
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
            this.products = JSON.parse(fs.readFileSync(path, 'utf-8'))
            //console.log('data recovered')
            return 'data recovered'
        }
    }
    async addProduct({title,description,price,thumbnail,stock}){
        try{
            let data = {title,description,price,thumbnail,stock}
            if(this.products.length>0){
                let next_id = this.products[this.products.length-1].id+1
                data.id = next_id
            }else{
                data.id= 1
            }
            this.products.push(data)    
            let data_json = JSON.stringify(this.products,null,2) 
            await fs.promises.writeFile(this.path,data_json)
            //console.log('id´s created product: ' +data.id)
            return 201
        }catch (error){
            console.log(error)
            return 'addProduct: error'
        }
    }
    read_products() {
        return this.products;
      }
      read_product(id) {
        return this.products.find((each) => each.id === id);
      }
    async getProducts(){
        try{
            if(this.products.length){ 
                //console.log(this.products)
            return this.products
            }else{
               return  console.log('Not found')
            }
        }catch(error){
            return 'getProducts: error'
        }
    }
    async getProductById(id){
        try{
            let one = this.products.find (each =>each.id===id)
            if(one){
                console.log(one)
               return one
            }else{
                return console.log('Not found')
            }
        }catch(error){
            return 'getProductById: error'
        }
    }
    async updateProduct(id,data) {
        try{       
            let one =  await this.getProductById(id)
                for (let prop in data){
                    //console.log(prop)
                    one[prop] = data[prop]
                }
                let data_json = JSON.stringify(this.products,null,2)
                await fs.promises.writeFile(this.path,data_json)
                //console.log('updated user: '+id)
                return 200
        }catch(error) {
            console.log(error)
            return null
        }
    }
    async deleteProduct(id){
        try{
            let search =  this.products.find(each=>each.id===id)
            if(search){
                this.products = this.products.filter(each => each.id!==id)
                let data_json = JSON.stringify(this.products,null,2)
                await fs.promises.writeFile(this.path,data_json)
                return 200
            }else{
                return null
            }
        }catch(error){
            console.log(error)
            return null
        }
    }
}

let manager = new ProductManager('./src/data/data.json')
async function manage(){
    await manager.addProduct({title:'almendras',description: 'frutos secos',price:100,thumbnail: '/almendras.jpg', stock: 10})
    await manager.addProduct({title:'avellanas',description: 'frutos secos',price:200,thumbnail: '/avellanas.jpg', stock: 15})
    await manager.addProduct({title:'castañas de caju',description: 'frutos secos',price:300,thumbnail: '/castañasdecaju.jpg', stock:20})
    await manager.addProduct({title:'almendras chcolate blanco',description: 'frutos secos',price:1000,thumbnail: '/almendraschocolateblanco.jpg', stock: 25})
    await manager.addProduct({title:'ciruelas sin carozo',description: 'ciruelas',price:1500,thumbnail: '/ciruelassincarozo.jpg', stock:30})
    await manager.addProduct({title:'garrapiñada de caju',description: 'garrapiñada',price:700,thumbnail: '/garrapiñadacaju', stock: 35})
    await manager.addProduct({title:'higo negro',description: 'higo',price:1200,thumbnail: '/higonegro.jpg', stock: 40})
    await manager.addProduct({title:'kiwi glaceado',description: 'kiwi',price:2000,thumbnail: '/kiwiglaceado.jpg', stock:45})
    await manager.addProduct({title:'pistacho',description: 'pistacho',price:1600,thumbnail: '/pistacho.jpg', stock:50})
    await manager.addProduct({title:'nueces',description: 'frutos secos',price:500,thumbnail: '/nueces.jpg', stock: 55})
    await manager.getProducts()
    await manager.getProductById(5)
    await manager.updateProduct(9,{title:'banana disecada'})
    await manager.deleteProduct(11)

}

//manage()

export default manager
