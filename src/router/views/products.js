import { Router } from "express";
import  productManager from '../../managers/Products.js' ;
import productValidator from "../../middlewares/productValidator.js";
import areUnits from "../../middlewares/areUnits.js";

const products_router = Router();

//POST /api/products para crear un producto
products_router.post(
    '/', //Primer parámetro el endpoint
    productValidator, //middlewares (la cantidad que sean)
    async (req, res, next)=>{ //Funcion para controlar el recurso (En esta caso para crear)
        try {
            let data = req.body;
            await productManager.addProduct(data);
            return res.json(
                {
                    status: 201,
                    message: "Product created succesfully"
                }
            )
        } catch (error) {
            next(error);
        }
    }
)

//GET /api/products?quantity=5 para ver todos los productos

//PUT /api/products/:id/:quantity para modificar el stock del producto
products_router.put("/:pid/:units", areUnits, async (req, res, next) => {
  try {
    let id = Number(req.params.pid);
    let units = Number(req.params.units);
    let data = { stock: units };
    await productManager.updateProduct(id, data);
    return res.json({
      status: 200,
      message: "product updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default products_router;