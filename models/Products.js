import db from '../db/conection'

class Product {
    static async findAll() {
      return await db('products').select('*');
    }

    static async findById(id) {
      const product = await db('products').where('product_id', id).first();
      return product;
    } 
  
    static async create(product) {
      const [newProduct] = await db('products').insert(product).returning('*');
      console.log(newProduct)
      return newProduct;
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