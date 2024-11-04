import db from '../../db/conection';

export default async function handler(req, res) {
    
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
    
}