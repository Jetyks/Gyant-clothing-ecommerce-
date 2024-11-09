/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE product_variants RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE product_colors RESTART IDENTITY CASCADE')
  await knex('product_colors').insert([
    { color_name: 'Black' },
    { color_name: 'Charcoal' },
    { color_name: 'Grey' },
    { color_name: 'Brown' },
    { color_name: 'Blue' },
    { color_name: 'Beige' },
    { color_name: 'Yellow' },
    { color_name: 'Purple' },
    { color_name: 'Olive Grey' },
    { color_name: 'Atlantic Midnight' }, //color azul oscuro pero mamador
    { color_name: 'Red' },
    { color_name: 'Cherry Red' },
    { color_name: 'Sky Blue' },
    { color_name: 'Green' },
    { color_name: 'Dark Blue' },
    { color_name: 'Dark Purple' },
    { color_name: 'Black Wash' },
    { color_name: 'Brown Wash' },
    { color_name: 'Grey Wash' },
    { color_name: 'Red Wash' },
    { color_name: 'Green Wash' },
    { color_name: 'Forest Green Wash' },
    { color_name: 'Peachy' },
    { color_name: 'White' },
    { color_name: 'Bonnie Blue' },
    { color_name: 'Burgundy Silk' },
    { color_name: 'Pink' },
    { color_name: 'Evening Blue' },
    
  ]);
}