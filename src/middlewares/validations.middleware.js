//Middleware para validación de datos
exports.validProduct = (req, res, next) => {
    const { name, price } = req.body;
    if (!name) {
        return res.status(400).json({
            status: "error",
            message: "The name is required"
        })
    }

    if (!price) {
        return res.status(400).json({
            status: "error",
            message: "The price is required"
        })
    }
next();
}
//Middleware para validación de datos. End