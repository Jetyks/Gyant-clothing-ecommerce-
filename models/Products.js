import db from '../db/conection'

class Product {
  static async findAll(gender) {
    let query = db('products')
      .leftJoin('product_variants', 'products.product_id', 'product_variants.product_id')
      .leftJoin('product_images', 'products.product_id', 'product_images.product_id')
      .select(
        'products.product_id',
        'products.product_name',
        'products.fit',
        'products.material',
        'products.main_image_url',
        'products.sku',
        'products.isActive',
        'products.description',
        'products.gender',
        'product_variants.variant_id',
        'product_variants.color_id',
        'product_variants.size',
        'product_variants.stock',
        'product_variants.price',
        'product_variants.variant_sku',
        'product_images.image_id',
        'product_images.image_url'
      );
  
    // Aplica el filtro por género si se proporciona
    if (gender) {
      query = query.where('products.gender', gender);
    }
  
    const rows = await query;
    const products = {};
  
    // Organiza los datos para evitar duplicados
    rows.forEach(row => {
      if (!products[row.product_id]) {
        products[row.product_id] = {
          product_id: row.product_id,
          product_name: row.product_name,
          fit: row.fit,
          material: row.material,
          main_image_url: row.main_image_url,
          sku: row.sku,
          isActive: row.isActive,
          description: row.description,
          gender: row.gender,
          variants: [],
          images: []
        };
      }
  
      // Evitar duplicados en variantes
      if (row.variant_id && !products[row.product_id].variants.some(variant => variant.variant_id === row.variant_id)) {
        products[row.product_id].variants.push({
          variant_id: row.variant_id,
          color_id: row.color_id,
          size: row.size,
          stock: row.stock,
          price: row.price,
          variant_sku: row.variant_sku
        });
      }
  
      // Evitar duplicados en imágenes
      if (row.image_id && !products[row.product_id].images.some(image => image.image_id === row.image_id)) {
        products[row.product_id].images.push({
          image_id: row.image_id,
          image_url: row.image_url
        });
      }
    });
  
    // Convierte el objeto 'products' a un array
    const productList = Object.values(products);
    return productList;
  }

    static async findById(id) {
      // Obtener el producto con el id proporcionado
      const product = await db('products').where('product_id', id).first();

      if (product) {
          // Obtener las variantes del producto
          const variants = await db('product_variants')
              .where('product_id', id)
              .select('*');

          // Agregar las variantes al objeto del producto (product)
          product.variants = variants;
      }

      return product;
  }
  
  static async addProduct(productData) {
    // Extraer las variantes y la información del producto
    const { variants, ...productInfo } = productData;

    // Insertar el producto en la tabla 'products' y obtener el product_id
    const [result] = await db('products').insert(productInfo).returning('product_id');
    console.log("Producto insertado, ID:", result.product_id);

    // Asegurarnos de que product_id es solo un número
    const productId = result.product_id;

    // Buscar el producto recién creado
    const product = await db('products').where('product_id', productId).first();
    console.log("Producto recuperado:", product);

    product.variants = []; // Inicializamos un arreglo vacío para las variantes

    if (!product) {
        throw new Error('Producto no encontrado');
    }

    // Verificar si hay variantes y, en caso afirmativo, insertarlas
    if (variants && variants.length > 0) {
        // Añadir el product_id a cada variante y asegurarse de que 'variant_img_url' esté presente
        const variantsData = variants.map(variant => ({
            ...variant,
            product_id: productId, // Asociar cada variante con el producto
            variant_img_url: variant.variant_img_url || '' // Si no se pasa una imagen, se coloca una cadena vacía
        }));

        // Insertar las variantes en la tabla 'product_variants'
        await db('product_variants').insert(variantsData);
    }

    // Recuperar las variantes relacionadas al producto recién insertado
    const variantsFromDb = await db('product_variants').where('product_id', productId);

    // Agregar las variantes al producto
    product.variants = variantsFromDb;

    // Devolver el producto con sus variantes
    return product;
}
  
    static async update(id, data) {
      await db('products').where('product_id', id).update(data);
      return await db('products').where('product_id', id).first();
    }
  
    static async delete(id) {
      await db('products').where('product_id', id).del();
    }
  }
  
  export default Product;