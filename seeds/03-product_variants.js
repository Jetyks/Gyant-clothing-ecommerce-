/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw('TRUNCATE product_variants RESTART IDENTITY CASCADE');
  await knex('product_variants').insert([
    { product_id: 1, color_id: 1, size: 'S', stock:20, price: 39.00, variant_sku: 'TSH-5010-BLACK-S' },
    { product_id: 1, color_id: 2, size: 'S', stock:20, price: 40.00, variant_sku: 'TSH-5011-BROWN-S' },
    { product_id: 2, color_id: 1, size: 'M', stock:20, price: 45.00, variant_sku: 'TSH-5020-BLACK-M' }
  ]);
};
