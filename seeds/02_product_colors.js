/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE product_variants RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE product_colors RESTART IDENTITY CASCADE')
  await knex('product_colors').insert([
    { color_name: 'Black' },
    { color_name: 'Brown' },
    { color_name: 'Gray' },
    { color_name: 'Red' },
    { color_name: 'Green Wash' },
    { color_name: 'Black Wash' },
    { color_name: 'Brown Wash' },
    { color_name: 'Gray Wash' },
    { color_name: 'Green Wash' },
    
  ]);
}