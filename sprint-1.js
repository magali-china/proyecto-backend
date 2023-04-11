class ProductManager{
    constructor(){
        this.products = []

    }
    getProducts(){
        console.log(this.products)
        return this.products
    }
    getProductById(product_id){
        let one = this.products.find(each=> each.id === product_id)
        if(one){
            console.log(one)
            return one
        }
        console.log('not found')
        return null 

    }
    addProduct({title,description,price,thumbnail,stock}){
        let id = 0
        if (this.products.length===0){
            id = 1
        } else {
            let lastProduct = this.products[this.products.length -1]
            id = lastProduct.id + 1
        }
        let product = {title,description,price,thumbnail,stock,id}
        this.products.push(product)
    }
}

let product = new ProductManager()
product.addProduct({title:'almendras',description: 'frutos secos',price:100,thumbnail: '/almendras.jpg',stock: 500})
product.addProduct({title:'avellanas',description: 'frutos secos',price:200,thumbnail: '/avellanas.jpg',stock: 300})
product.addProduct({title:'castañas de caju',description: 'frutos secos',price:300,thumbnail: '/castañasdecaju.jpg',stock: 1000})
product.addProduct({title:'nueces',description: 'frutos secos',price:500,thumbnail: '/nueces.jpg',stock: 600})

product.getProducts()
product.getProductById(2)
product.getProductById(5)