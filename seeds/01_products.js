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
    product_name: "Alpha Compression T-shirt",
		fit: "Ultra fitted",
		material: "100% Polyamide",
		description: "High-performance compression t-shirt designed for athletes seeking maximum comfort and support. Features breathable fabric technology to keep skin dry, body comfortable and looking ALPHA for any challenge you face.",
		main_image_url: "https://www.youngla.com/cdn/shop/files/475_forest-green_002_06_27_rudy_ecomm.jpg?v=1690394021&width=800",
		sku: "1001-ALPHA-TSH-COMP",
		isActive: true,
	  gender: "Male"
    },
    {
      product_name: "Insane Compression T-shirt",
      fit: "Ultra fitted",
      material: "77% Polyamide 23% Polyester",
      description: "High-performance compression t-shirt designed for athletes seeking maximum comfort and support to every muscle in their bodies. Features breathable fabric technology to keep skin dry, with optimized elasticity for any INSANE movement.",
      main_image_url: "https://www.youngla.com/cdn/shop/products/YLAGlobalSuperShoot-56.jpg?v=1687895497&width=800",
      sku: "1001-INSANE-TSH-COMP",
      isActive: true,
      gender: "Male"
    },
    {
      product_name: "The Nicest Stringer",
      fit: "True to size",
      material: "45% Cotton, 45% Lyocell, 10% Elastane.",
      description: "The Nicest Stringer is designed for ultimate fit and style, providing ideal chest coverage while perfectly contouring to your body. Its open back and slim straps showcase your back and delt muscles, making it perfect for workouts. Crafted from a premium blend of 45% Cotton, 45% Lyocell, and 10% Elastane, this stringer offers superior comfort, stretch, and durability.",
      main_image_url: "https://www.youngla.com/cdn/shop/files/Gym9275778.jpg?v=1727736775&width=800",
      sku: "1002-NICEST-TSH-STRINGER",
      isActive: true,
      gender: "Male"
    },
    {
      product_name: "Aura Cropped T-shirt",
      fit: "Loose Cropped Fitting.",
      material: "100% Cotton",
      description: "Step up your streetwear game with our Cropped Tees. Featuring a short and boxy fit, these tees provide the perfect blend of comfort and edgy style. The standout tonal puff back print logo ensures you make a statement wherever you go. Perfect for any casual outing, these tees bring a fresh, contemporary look to your wardrobe.",
      main_image_url: "https://www.youngla.com/cdn/shop/files/YLA6.jpg?v=1719336288&width=800",
      sku: "1005-AURA-TSH-STRINGER",
      isActive: true,
      gender: "Male"
    },
    {
      product_name: "Curve Bodycon Jacket",
      fit: "Fitted fit.",
      material: "80% Nylon, 20% Spandex.",
      description: "Introducing our Curve Bodycon Jacket – a workout essential that's both stylish and functional. Crafted from moisture-wicking fabric, it's perfect for workouts. The curve seams along the sides create a flattering effect on your body, while the simplistic design turns heads. This jacket is a must have in your workout wardrobe!",
      main_image_url: "https://www.youngla.com/cdn/shop/files/08_30_24_Noelle_eComm2089.jpg?v=1727477572&width=800",
      sku: "5000F-JACKET-BODYCON",
      isActive: true,
      gender: "Female"
    },
    {
      product_name: "Core Seamless Scoop Neck Bra",
      fit: "True to size.",
      material: "53% polyamide, 37% polyester, 10% elastane.",
      description: "Elevate your comfort and style with our new Core Collection, carefully crafted with high quality fibers. The seamless knit fabric feels incredibly sleek and lets your skin breathe. The core fabric molds perfectly to embrace your body, ensuring comfort in your sports bra. Suitable for light to medium workouts, it features a back design that enhances your shape while you exercise.",
      main_image_url: "https://www.youngla.com/cdn/shop/files/w329_tweed-brown_001_11_21_kelsey_ecomm.jpg?v=1717787488&width=800",
      sku: "5100F-BRA-SCOOPNECK",
      isActive: true,
      gender: "Female"
    },
    {
      product_name: "Waist Delete Tee",
      fit: "Runs small, recommend sizing up",
      material: "76% polyamide, 36% spandex.",
      description: "Elevate your wardrobe with our Waist Delete Tee. This full-length, double-layered tee is crafted from slick fabric for a smooth and luxurious feel. Designed to be fitted, it contours your silhouette perfectly. Whether you're dressing up or keeping it casual, this versatile piece is a must-have.",
      main_image_url: "https://www.youngla.com/cdn/shop/files/91824_YLA_Tampa4501.jpg?v=1727391686&width=800",
      sku: "5200F-TSH-DLTTEE",
      isActive: true,
      gender: "Female"
    },
    {
      product_name: "Core Seamless Sports Bra",
      fit: "True to size",
      material: "55% polyamide, 35% polyester, 10% elastane.",
      description: "Elevate your comfort and style with our new Core Collection, carefully crafted with high quality fibers. The seamless knit fabric feels incredibly sleek and lets your skin breathe. The core fabric molds perfectly to embrace your body, ensuring comfort in your sports bra. Suitable for light to medium workouts, it features a back design that enhances your shape while you exercise.",
      main_image_url: "https://www.youngla.com/cdn/shop/files/w327_3.png?v=1700546086&width=800",
      sku: "5100F-BRA-SPORTS",
      isActive: true,
      gender: "Female"
    },
    /* {
      product_name: "",
      fit: "",
      material: "",
      description: "",
      main_image_url: "",
      sku: "5100F-BRA-SCOOPNECK",
      isActive: true,
      gender: "Female"
    }, */
  ]);
};
