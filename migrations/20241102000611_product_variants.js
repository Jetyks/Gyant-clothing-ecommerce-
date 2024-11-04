/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    const exists = await knex.schema.hasTable('product_variants');
    
    if (!exists) {
        await knex.schema.createTable('product_variants', function (table) {
            table.increments('variant_id').primary();
            table.integer('product_id').unsigned().references('product_id').inTable('products').onDelete('CASCADE');
            table.integer('color_id').unsigned().references('color_id').inTable('product_colors').onDelete('CASCADE');
            table.string('size', 10); // Opcional, para tallas: "S", "M", "L", "XL", etc.
            table.integer('stock').defaultTo(0); // Para controlar el inventario por variante
            table.decimal('price', 10, 2).notNullable(); // Precio específico para esta variante
            table.string('variant_sku', 100).notNullable().unique();
          });
    }
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('product_variants')
};
