const fakeProducts = require('./fakeProducts')
const fakeCarts = require('./fakeCarts')


module.exports = class FakeProductsDB {
  constructor () {
    this.contID = fakeProducts.length
    this.products = fakeProducts
  }



    getAllProducts () {
      return this.products
    }
    getProductById (id) {
      return this.products.find(obj => obj.id === parseInt(id))
    }
    postProduct ({ title, description, code, price, status, stock, category ,thumbnail }) {
    this.contID++
    const newProduct = { id: this.contID, title, description, code, price: Number(price), status: true, stock, category, thumbnail }
    this.products.push(newProduct)
    return newProduct
  }

  
  putProduct ({ id, title, description, code, price, status, stock, category ,thumbnail }) {
    const index = this.products.findIndex(product => product.id === parseInt(id))
    if (index < 0) return null
    const updateProduct = { id: parseInt(id), title, description, code, price, status, stock, category ,thumbnail }
    this.products.splice(index, 1, updateProduct)
    return updateProduct
  }

  deleteProducto (id) {
    const index = this.products.findIndex(product => product.id === parseInt(id))
    if (index < 0) return null
    this.products.splice(index, 1)
    return id
  }
}

module.exports = class fakeCartsDB {
  constructor () {
    this.contID = fakeCarts.length
    this.carts = fakeCarts
  }



/*     getAllProducts () {
      return this.products
    } */
    getProductById (id) {
      return this.carts.find(obj => obj.id === parseInt(id))
    }
    postProduct () {
    this.contID++
    const newCart = { id: this.contID, prodcuts: []}
    this.carts.push(newCart)
    return newCart
  }

/*   
  putProduct ({ id, title, description, code, price, status, stock, category ,thumbnail }) {
    const index = this.products.findIndex(product => product.id === parseInt(id))
    if (index < 0) return null
    const updateProduct = { id: parseInt(id), title, description, code, price, status, stock, category ,thumbnail }
    this.products.splice(index, 1, updateProduct)
    return updateProduct
  }

  deleteProducto (id) {
    const index = this.products.findIndex(product => product.id === parseInt(id))
    if (index < 0) return null
    this.products.splice(index, 1)
    return id
  } */
}