/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE product_variants RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE product_colors RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE products RESTART IDENTITY CASCADE')
  await knex('products').insert([
    {
      product_name: 'Classic Performance Tee',
      fit: 'Regular',
      material: '100% Polyester',
      description: 'This crew neck tee is designed for ultimate comfort, featuring breathable fabric to keep you cool during workouts.',
      main_image_url: 'https://www.youngla.com/cdn/shop/files/YLA6.jpg?v=1719336288&width=800',
      sku: 'SKU12345',
      isActive: true
    },
      {
        product_name: 'Sports Graphic Tee',
        fit: 'Slim',
        material: 'Poliéster',
        description: 'A versatile performance tee designed for workouts and casual wear. Made with moisture-wicking fabric for all-day comfort.',
        main_image_url: 'https://www.youngla.com/cdn/shop/files/YLA6.jpg?v=1719336288&width=800',
        sku: 'SKU12346',
        isActive: true,
      },{
        product_name: 'Moisture-Wicking Crew Neck',
        fit: 'Regular',
        material: '100% Polyester',
        description: 'This crew neck tee is designed for ultimate comfort, featuring breathable fabric to keep you cool during workouts.',
        main_image_url: 'https://www.youngla.com/cdn/shop/files/YLA6.jpg?v=1719336288&width=800',
        sku: 'SKU24375',
        isActive: true,
      },
    
  ]);
};
