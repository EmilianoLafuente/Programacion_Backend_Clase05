const express = require('express')
const morgan = require('morgan')
const router = require('./src/router')
const controllerProducts = require ('./src/api/produtcs/controller.Products.js')
const controllerCarts = require ('./src/api/carts/controller.Carts.js')

const port = 8080

const app = express()

//son middleware
app.use(express.json()) //para que el servidor resuelva los .body
app.use(express.urlencoded ({ extended: true})) //para que el servidor resuelva los forms
app.use(morgan('dev'))
app.use(express.static(__dirname + 'public'))
app.use('/src/produtcs', controllerProducts)
app.use('/src/carts', controllerCarts)

router(app)

//miServidor
app.listen(port, ()=> {
    console.log(`Server running at port ${port}`);
})