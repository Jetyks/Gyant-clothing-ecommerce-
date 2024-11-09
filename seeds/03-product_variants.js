/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw('TRUNCATE product_variants RESTART IDENTITY CASCADE');
  await knex('product_variants').insert([
    { product_id: 1, color_id: 1, size: 'S', stock:55, price: 35.00, variant_sku: '1001-ALPHA-TSH-COMP-BLACK-S'},
    { product_id: 1, color_id: 4, size: 'S', stock:50, price: 35.00, variant_sku: '1001-ALPHA-TSH-COMP-BROWN-S'},
    { product_id: 1, color_id: 10, size: 'S', stock:50, price: 35.00, variant_sku: '1001-ALPHA-TSH-COMP-ATLMID-S'},
    { product_id: 1, color_id: 6, size: 'S', stock:50, price: 35.00, variant_sku: '1001-ALPHA-TSH-COMP-BEIGE-S'},
    { product_id: 1, color_id: 12, size: 'S', stock:50, price: 35.00, variant_sku: '1001-ALPHA-TSH-COMP-CHERRYRED-S'},
    { product_id: 2, color_id: 1, size: 'S', stock:45, price: 34.00, variant_sku: '1001-INSANE-TSH-COMP-BLACK-S'},
    { product_id: 2, color_id: 15, size: 'S', stock:40, price: 34.00, variant_sku: '1001-INSANE-TSH-COMP-DRKBLUE-S'},
    { product_id: 2, color_id: 7, size: 'S', stock:40, price: 34.00, variant_sku: '1001-INSANE-TSH-COMP-YELLOW-S'},
    { product_id: 2, color_id: 3, size: 'S', stock:40, price: 34.00, variant_sku: '1001-INSANE-TSH-COMP-GREY-S'},
    { product_id: 2, color_id: 11, size: 'S', stock:40, price: 34.00, variant_sku: '1001-INSANE-TSH-COMP-RED-S'},
    { product_id: 3, color_id: 1, size: 'S', stock:40, price: 30.00, variant_sku: '1001-NICEST-TSH-COMP-BLACK-S'},
    { product_id: 3, color_id: 8, size: 'S', stock:40, price: 30.00, variant_sku: '1001-NICEST-TSH-COMP-PURPLE-S'},
    { product_id: 3, color_id: 11, size: 'S', stock:40, price: 30.00, variant_sku: '1001-NICEST-TSH-COMP-RED-S'},
    { product_id: 4, color_id: 11, size: 'S', stock:40, price: 40.00, variant_sku: '1005-AURA-TSH-COMP-BLACK-S'},
    { product_id: 4, color_id: 11, size: 'S', stock:40, price: 40.00, variant_sku: '1005-AURA-TSH-COMP-BROWN-S'},
    { product_id: 4, color_id: 22, size: 'S', stock:40, price: 40.00, variant_sku: '1005-AURA-TSH-COMP-FRSTGRNWASH-S'},
    { product_id: 4, color_id: 19, size: 'S', stock:40, price: 40.00, variant_sku: '1005-AURA-TSH-COMP-GREYWASH-S'},
    { product_id: 5, color_id: 1, size: 'S', stock:40, price: 45.00, variant_sku: '5000F-JACKET-BODYCON-BLACK-S'},
    { product_id: 5, color_id: 4, size: 'S', stock:40, price: 45.00, variant_sku: '5000F-JACKET-BODYCON-BROWN-S'},
    { product_id: 5, color_id: 22, size: 'S', stock:40, price: 45.00, variant_sku: '5000F-JACKET-BODYCON-PEACHY-S'},
    { product_id: 5, color_id: 23, size: 'S', stock:40, price: 45.00, variant_sku: '5000F-JACKET-BODYCON-WHITE-S'},
    { product_id: 6, color_id: 4, size: 'S', stock:40, price: 40.00, variant_sku: '5100F-BRA-SCOOPNECK-BROWN-S'},
    { product_id: 6, color_id: 6, size: 'S', stock:40, price: 40.00, variant_sku: '5100F-BRA-SCOOPNECK-BEIGE-S'},
    { product_id: 6, color_id: 24, size: 'S', stock:40, price: 40.00, variant_sku: '5100F-BRA-SCOOPNECK-BONNIEBLUE-S'},
    { product_id: 6, color_id: 25, size: 'S', stock:40, price: 40.00, variant_sku: '5100F-BRA-SCOOPNECK-BRGNDYSILK-S'},
    { product_id: 7, color_id: 10, size: 'S', stock:40, price: 35.00, variant_sku: '5200F-TSH-DLTTEE-ATLMID-S'},
    { product_id: 7, color_id: 13, size: 'S', stock:40, price: 35.00, variant_sku: '5200F-TSH-DLTTEE-SKYBLUE-S'},
    { product_id: 7, color_id: 24, size: 'S', stock:40, price: 35.00, variant_sku: '5200F-TSH-DLTTEE-WHITE-S'},
    { product_id: 7, color_id: 27, size: 'S', stock:40, price: 35.00, variant_sku: '5200F-TSH-DLTTEE-PINK-S'},
    { product_id: 8, color_id: 25, size: 'S', stock:40, price: 38.00, variant_sku: '5100F-BRA-SPORTS-BONNIEBLUE-S'},
    { product_id: 8, color_id: 1, size: 'S', stock:40, price: 38.00, variant_sku: '5100F-BRA-SPORTS-GRAY-S'},
    { product_id: 8, color_id: 1, size: 'S', stock:40, price: 38.00, variant_sku: '5100F-BRA-SPORTS-PINK-S'},
    { product_id: 8, color_id: 28, size: 'S', stock:40, price: 38.00, variant_sku: '5100F-BRA-SPORTS-EVNINGBLUE-S'},
    /* { product_id: 6, color_id: 1, size: 'S', stock:40, price: 45.00, variant_sku: ''}, */
  ]);
};
