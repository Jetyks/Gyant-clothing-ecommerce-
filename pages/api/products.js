import { createRouter } from 'next-connect';
/* import db from '../../db/conection'; */
import Product from '../../models/Products'; // Asegúrate de tener tu modelo importado

const router = createRouter();

router
  .get(async (req, res) => {
    try {
        const products = await Product.findAll(); // Ejecuta la consulta a la base de datos
        res.status(200).json(products); // Envía la respuesta en formato JSON
      } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
      }
    })

  .post(async (req, res) => {
    const { product_name, fit, material, description, main_image_url, sku } = req.body;
    if (!product_name || typeof product_name !== 'string') {
        return res.status(400).json({ error: 'Name is required and must be a string' });
    }
    if (!fit || typeof fit !== 'string') {
        return res.status(400).json({ error: 'Fit is required and must be a string' });
    }
    if (!material || typeof material !== 'string') {
        return res.status(400).json({ error: 'Material is required and must be a string' });
    }
    if (!main_image_url || typeof main_image_url !== 'string') {
        return res.status(400).json({ error: 'A main image url is required and must be a string' });
    }
    if (!description || typeof description !== 'string') {
        return res.status(400).json({ error: 'Description is required and must be a string' });
    }
    if (!sku || typeof sku !== 'string') {
        return res.status(400).json({ error: 'SKU is required and must be a string' });
    }
    try {
        const newProduct = await Product.create({ product_name, fit, material, description, main_image_url, sku });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error creating the product' });
    }
  })

  .patch(async (req, res) => {
    try {
        const { id: productId } = req.params;
        const newProductData = req.body

        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }
        if (!newProductData || typeof newProductData !== 'object') {
            return res.status(400).json({ error: 'Product data must be an object' });
        }
        
        const updateProduct = await Product.update( productId, newProductData ); // Ejecuta la consulta a la base de datos
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updateProduct); // Envía la respuesta en formato JSON
      } catch (error) {
        console.error('Error al editar el producto:', error);
        res.status(500).json({ error: 'Error al editar el producto' });
      }
    })

// Manejo de errores
export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not Found!');
  },
});
/* export default async function handler(req, res) {
    
    if(req.method === 'GET'){
        try {
            const products = await db('products').select('*'); // Obtiene todos los productos
            res.status(200).json(products);
        } catch (error) {
            console.error('Error al obtener los productos:', error); // Log para depuración
            res.status(500).json({ error: 'Error al obtener los productos' });
        }
    }
    else if (req.method === 'POST') {
        try {
            const { product_name, fit, material, description, main_image_url, sku } = req.body;

            // Validación de datos completos
            if (!product_name || !fit || !material || !description || !main_image_url || !sku) {
                return res.status(400).json({ error: 'Faltan campos requeridos' });
            }

            const [result] = await db('products').insert(req.body).returning('product_id');
            console.log(result)
            const productId = result.product_id;
            // Busca el producto recién creado
            const product = await db('products').where('product_id', productId).first();
            
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            res.status(201).json(product); // Devuelve el producto creado
        } catch (error) {
            console.error('Error al crear el producto:', error); // Log del error para debug
            res.status(500).json({ error: 'Error al crear el producto' });
        }
    } 
    else if (req.method === 'PATCH') {
        try {
            const { product_name, fit, material, description, main_image_url, sku } = req.body;

            // Validación de datos completos
            if (!product_name || !fit || !material || !description || !main_image_url || !sku || !isActive) {
                return res.status(400).json({ error: 'Faltan campos requeridos' });
            }

            const [result] = await db('products').insert(req.body).returning('product_id');
            console.log(result)
            const productId = result.product_id;
            // Busca el producto recién creado
            const product = await db('products').where('product_id', productId).first();
            
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            res.status(201).json(product); // Devuelve el producto creado
        } catch (error) {
            console.error('Error al crear el producto:', error); // Log del error para debug
            res.status(500).json({ error: 'Error al crear el producto' });
        }
    } 
    else if (req.method === 'DELETE') {
        try {
            const id = req.query.id; // Accede directamente a req.query.id
            console.log('ID recibido:', id);

            // Validación de datos completos
            if (!id) {
                return res.status(400).json({ error: 'Se requiere el ID del producto para eliminarlo' });
            }

            const deletedProduct = await db('products').where('product_id', id).del(); // Ejecuta un DELETE al producto con el id que coincida

            if (deletedProduct) {
                res.status(200).json({ message: `Producto con ID ${id} eliminado correctamente` });
            } else {
                res.status(404).json({ error: 'Producto no encontrado' });
            }
            
        } catch (error) {
            console.error('Error al eliminar el producto:', error); // Log del error para debug
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    } 
    
    else {
        res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    
} */