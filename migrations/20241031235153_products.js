/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    const exists = await knex.schema.hasTable('products');
    
    if (!exists) {
      await knex.schema.createTable('products', function (table) {
        table.increments('product_id').primary();
        table.string('product_name', 100).notNullable();
        table.string('fit', 200).notNullable();
        table.string('material', 100).notNullable();
        table.string('description', 400).notNullable();
        table.string('main_image_url', 500).notNullable();
        table.string('sku', 100).notNullable();
        table.boolean('isActive').defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('gender', 50).notNullable();
      });
  
      // Cambia el valor inicial de la secuencia en PostgreSQL
      await knex.raw('ALTER SEQUENCE products_product_id_seq RESTART WITH 500');
    }
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products')
};
