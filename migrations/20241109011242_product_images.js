/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    const exists = await knex.schema.hasTable('product_images');
    if(!exists){
        await knex.schema.createTable('product_images', function(table) {
            table.increments('image_id').primary(); // ID único para cada imagen
            table.integer('product_id').unsigned().references('product_id').inTable('products').onDelete('CASCADE');
            table.string('image_url', 200).notNullable();
        });
    }
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('product_images');
};
