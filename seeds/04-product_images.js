/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw('TRUNCATE product_images RESTART IDENTITY CASCADE')

  await knex('product_images').insert([
    {product_id: 1, image_url: "https://www.youngla.com/cdn/shop/files/DSC05419.jpg?v=1690394021&width=800"},
    {product_id: 1, image_url: "https://www.youngla.com/cdn/shop/files/YLA_12.311_c320a5b2-1cd9-4ec4-b010-51f752f07e39.jpg?v=1712696754&width=800"},
    {product_id: 1, image_url: "https://www.youngla.com/cdn/shop/files/YLA_7.18.jpg?v=1690394021&width=800"},
    {product_id: 1, image_url: "https://www.youngla.com/cdn/shop/files/475_navy_003_06_27_rudy_ecomm.jpg?v=1690394021&width=800"},
    {product_id: 2, image_url: "https://www.youngla.com/cdn/shop/products/YLAGlobalSuperShoot-75.jpg?v=1678407208&width=800"},
    {product_id: 2, image_url: "https://www.youngla.com/cdn/shop/files/323A2222_9d95a5d6-4e7e-4f55-8dec-d275620ecff4.jpg?v=1700094290&width=600"},
    {product_id: 2, image_url: "https://www.youngla.com/cdn/shop/products/DSC03003.jpg?v=1700094261&width=800"},
    {product_id: 2, image_url: "https://www.youngla.com/cdn/shop/products/YLAGlobalSuperShoot-83.jpg?v=1700094261&width=800"},
    {product_id: 3, image_url: "https://www.youngla.com/cdn/shop/files/323A8492.jpg?v=1727218373&width=800"},
    {product_id: 3, image_url: "https://www.youngla.com/cdn/shop/files/Gym9276088.jpg?v=1727736772&width=800"},
    {product_id: 4, image_url: "https://www.youngla.com/cdn/shop/files/YLA6.1e2.jpg?v=1719336340&width=800"},
    {product_id: 4, image_url: "https://www.youngla.com/cdn/shop/files/YLA63.12.jpg?v=1719336340&width=800"},
    {product_id: 4, image_url: "https://www.youngla.com/cdn/shop/files/YLA6.12.jpg?v=1719336340&width=800"},
    {product_id: 4, image_url: "https://www.youngla.com/cdn/shop/files/YLA6.112.jpg?v=1719336340&width=800"},
    {product_id: 5, image_url: "https://www.youngla.com/cdn/shop/files/08_30_24_Noelle_eComm2300.jpg?v=1727477566&width=800"},
    {product_id: 5, image_url: "https://www.youngla.com/cdn/shop/files/YLA_HER_Kelsey___Victoria_eComm47350.jpg?v=1722364703&width=800"},
    {product_id: 5, image_url: "https://www.youngla.com/cdn/shop/files/noelkle.jpg?v=1727477571&width=800"},
    {product_id: 6, image_url: "https://www.youngla.com/cdn/shop/files/11_26_23_Kelsey_eComm41254.jpg?v=1717787488&width=600"},
    {product_id: 6, image_url: "https://www.youngla.com/cdn/shop/files/w329_bonnie-blue_003_11_21_kelsey_ecomm.jpg?v=1717787482&width=800"},
    {product_id: 6, image_url: "https://www.youngla.com/cdn/shop/files/w329_w120_tan-suede_001_10_26_kelsey_ecomm.jpg?v=1717787488&width=800"},
    {product_id: 7, image_url: "https://www.youngla.com/cdn/shop/files/91824_YLA_Tampa4586.jpg?v=1727391682&width=800"},
    {product_id: 7, image_url: "https://www.youngla.com/cdn/shop/files/91824_YLA_Tampa4320.jpg?v=1727391690&width=800"},
    {product_id: 7, image_url: "https://www.youngla.com/cdn/shop/files/91824_YLA_Tampa4479.jpg?v=1727391684&width=800"},
    {product_id: 8, image_url: "https://www.youngla.com/cdn/shop/files/11_20_23_Kelsey_Ecomm0093_1.jpg?v=1723079600&width=800"},
    {product_id: 8, image_url: "https://www.youngla.com/cdn/shop/files/11_20_23_Kelsey_Ecomm0104_1.jpg?v=1723079592&width=800"},
    {product_id: 8, image_url: "https://www.youngla.com/cdn/shop/files/LEX05893a.jpg?v=1723079592&width=800"},
    {product_id: 8, image_url: "https://www.youngla.com/cdn/shop/files/05_23_24_Noelle___Kelsey_eComm0628.jpg?v=1726233140&width=800"},
    /* {product_id: 5, image_url: ""}, */

  ]);
};
