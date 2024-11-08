/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('product_colors', function (table) {
      table.increments('color_id').primary();  // ID único para cada color
      table.string('color_name', 50).notNullable();  // Nombre del color, ej. "Rojo"
      table.string('hex_code', 50);  // Código hexadecimal, ej. "#FF0000"
      table.timestamp('created_at').defaultTo(knex.fn.now());  // Fecha de creación
    });
  };
  
  exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('product_colors');
  };
