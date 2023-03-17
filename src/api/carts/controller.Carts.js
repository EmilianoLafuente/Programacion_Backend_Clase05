const {Router} = require('express')
const FakeProductsDB = require('../../store/fakeProductDB')
const productsDB = new FakeProductsDB()
const fakeCartsDB = require('../../store/fakeProductDB')
const cartsDB = new fakeCartsDB()

const router = Router()

router.post('/', postProduct)
router.get('/:cid', getProductById)




function getProductById (req, res) {
  const { cid } = req.params
  const product = cartsDB.getProductById(cid)
  
  if (!product) return res.json({ error: 'producto no encontrado' })
  res.json(product)
}

function postProduct (req, res) {
  const newCart = cartsDB.postProduct()
  res.json(newCart)
}


module.exports = router