//? Buscar Varios Productos
exports.findProducts = (req, res) => {
    res.status(200).json({
        message: "Hello from the get route!"
    })

}

//? Crear un producto
exports.createProduct = (req, res) => {
    //console.log("req:",req)
    const product = req.body
    console.log("post:", req.body)
    res.status(201).json({
        message: "hello from th e post route",
        product
    });
}

//? Buscar un Producto dado un id
exports.findProduct = (req, res) => {
    console.log(req.params)
    console.log(req.params.id)
    res.status(200).json({
        message: "Hello from the get route with id"
    })
}
//? Actualizar un Producto
exports.updateProduct = (req, res) => {
    const id = req.params.id

    res.status(200).json({
        message: "hello from the update route with id",
        id,
    })
}

//? Eliminar un Producto
exports.deleteProduct = (req, res) => {
    const id = req.params.id
    const { requestTime } = req
    console.log("method: ", req.method)
    console.log("params:", req.params)

    res.status(200).json({
        ok: true,
        params: req.params,
        requestTime
    })
}

/* module.exports ={
    findProducts, createProduct,
    findProduct,
    updateProduct,deleteProduct
} */