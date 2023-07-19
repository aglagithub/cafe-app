//console.log("Hello from server")
const express = require("express")
const morgan = require("morgan")

//routes
const productRouter = require("./routes/products.route")

const app = express()
const PORT = 3000

app.use(express.json())
app.use(morgan("dev")) // nota: Hay más funcionalidades: common, combine

//Middleware
getTimeRequest = (req, res, next) => {
    const date = new Date()
    console.log(date)
    //nose podria acceder a in valor que se ejecute después
req.requestTime = date
    next()
}
app.use(getTimeRequest)
//Middleware.End

//Otro Middleware
otroMiddleware = (req, res, next) => {
    const valor =10
req.valor = valor
    next()
}
app.use(otroMiddleware)
//

/* app.get('/', (req, res) => {
    console.log("get " / ": Executed")
    res.send("Hello from Server! 😍")
}) */

/* Que se desea hacer:
- Buscar el dtalle de un producto
- Crear un producto: Nombre, emoji, ingredientes, cantidad, precio, descripción
- Modificar un producto
- Listar Productos
- Crear Producto
- Actualizar producto
- Borrar producto
*/


app.use("/api/v1/products", productRouter)

/*-------------------------- */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `)
})
