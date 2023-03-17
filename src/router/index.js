const productsController = require('../api/produtcs/controller.Products')
const cartsController = require('../api/carts/controller.Carts')


const router = (app) => {

    app.use('/products', productsController)
    app.use('/carts', cartsController)
}

module.exports = router