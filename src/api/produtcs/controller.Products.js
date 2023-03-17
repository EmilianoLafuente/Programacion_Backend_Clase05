const {Router} = require('express')
const FakeProductsDB = require('../../store/fakeProductDB')
const productsDB = new FakeProductsDB()

const router = Router()

router.get('/', getAllProducts)
router.get('/:pid', getProductById)
router.post('/', validateProduct, postProduct)
router.put('/:id', validateProduct, putProduct)
router.delete('/:id', deleteProduct)

function getAllProducts (req, res) {
  const products = productsDB.getAllProducts()

  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10; // Establece el límite predeterminado en 10 si no se especifica
    const results = products.slice(0, limit); // Obtiene el número máximo de resultados especificados por el cliente
    res.json(results);
    } catch (error) {
    console.error(error);
    res.status(500).send('Error del servidor');
  }
}

function getProductById (req, res) {
  const { pid } = req.params
  const product = productsDB.getProductById(pid)
  if (!product) return res.json({ error: 'producto no encontrado' })
  res.json(product)
}

function postProduct (req, res) {
  const { title, description, code, price, status, stock, category ,thumbnail } = req.body
  const newProduct = productsDB.postProduct({ title, description, code, price, status, stock, category ,thumbnail })
  res.json(newProduct)
}

function putProduct (req, res) {
  const { id } = req.params
  const { title, description, code, price, status, stock, category ,thumbnail } = req.body
  const updateProduct = productsDB.putProduct({ id, title, description, code, price, status, stock, category ,thumbnail})
  if (!updateProduct) return res.json({ error: 'producto no encontrado para editar' })
  res.send(updateProduct)
}

function deleteProduct (req, res) {
  const { id } = req.params
  const deletedId = productsDB.deleteProducto(id)
  if (!deletedId) return res.json({ error: 'producto no encontrado para eliminar' })
  res.json({ id })
}

// Validaciones

function validateProduct (req, res, next) {
  const { title, description, code, price, status, stock, category ,thumbnail } = req.body
  if (!title.trim() || !description || !code || !price || !status ||!stock || !category   ) return res.json({ error: 'faltan datos del producto' })
  if (isNaN(price)) return res.json({ error: 'El precio debe ser de tipo numérico' })
  if (!thumbnail.includes('http')) return res.json({ error: 'La URL de la foto debe iniciar con http' })
  next()
}

module.exports = router