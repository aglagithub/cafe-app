const express = require("express")
//controllers
const productController = require('./../controllers/products.controller')
//middlewares
const validationMiddleware = require("./../middlewares/validations.middleware")

const router = express.Router()

router.route("/").get(productController.findProducts).post(validationMiddleware.validProduct, productController.createProduct)

router.route("/:id").get(productController.findProduct).patch(validationMiddleware.validProduct,productController.updateProduct).delete(productController.deleteProduct)


// router.get("/", productController.findProducts)
// router.post("/", validationMiddleware.validProduct, productController.createProduct)
// router.get("/:id", productController.findProduct)
// router.patch("/:id", validationMiddleware.validProduct,productController.updateProduct)
// router.delete("/:id", productController.deleteProduct)


module.exports = router