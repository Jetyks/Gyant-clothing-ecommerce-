import { createRouter } from 'next-connect';
import Product from '../../../models/Products';

const router = createRouter();

router
  .get(async (req, res) => {
    try {
      const { id } = req.query;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      res.status(500).json({ error: 'Error al obtener el producto' });
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.query;
      const newProductData = req.body;
      const updatedProduct = await Product.update(id, newProductData);
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error al editar el producto:', error);
      res.status(500).json({ error: 'Error al editar el producto' });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.query;
      const deletedProduct = await Product.delete(id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(204).end();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).json({ error: 'Error al eliminar el producto' });
    }
  });

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not Found!');
  },
});