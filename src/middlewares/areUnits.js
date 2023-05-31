import productManager from "../managers/Products.js";

const areUnits = (req, res, next) => {
  let id = Number(req.params.pid);
  let units = Number(req.params.units);
  let stock = productManager.read_product(id).stock;
  if (units < stock) {
    req.params.units = stock - units;
    next();
  } else {
    return res.json({
      status: 400,
      message: "there are not enough products",
    });
  }
};

export default areUnits;