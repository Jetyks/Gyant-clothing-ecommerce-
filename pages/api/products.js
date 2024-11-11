import { createRouter } from 'next-connect';
/* import db from '../../db/conection'; */
import Product from '../../models/Products';

const router = createRouter();

router
  .get(async (req, res) => {
    const { gender } = req.query; // Obtiene el parámetro 'gender' de la URL, si está presente
  
    try {
      const products = await Product.findAll(gender); // Llama a la función findAll del modelo con el parámetro de género
      res.status(200).json(products);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  })

  .post(async (req, res) => {
    const { product_name, fit, material, description, main_image_url, sku, variants, gender } = req.body;
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
    if (!gender || typeof gender !== 'string') {
        return res.status(400).json({ error: 'Gender is required and must be a string' });
    }
    /* if (!variants || typeof variants !== 'object') {
        return res.status(400).json({ error: 'Object is required and must be an object' });
    } */
        try {
            // Llamada a la función `addProduct` con los datos del producto
            const newProduct = await Product.addProduct({ product_name, fit, material, description, main_image_url, sku, variants, gender });
            res.status(201).json(newProduct);
        } catch (error) {
            // Enviar un error detallado en la respuesta y en los logs para depuración
            console.error('Error creating the product:', error);
            res.status(500).json({ error: 'Error creating the product', details: error.message });
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
        
        const updateProduct = await Product.update( productId, newProductData ); // Manda a llamar la funcion al modelo
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updateProduct);
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