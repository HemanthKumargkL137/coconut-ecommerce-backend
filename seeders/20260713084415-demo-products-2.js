"use strict";

module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const now = new Date();

      await queryInterface.bulkInsert(
        "products",
        [
          { categoryId: 3, productName: "Coconut Powder 500g-Tender Coconut", description: "Natural coconut powder", price: 500.0, discountPrice: 450.0, weight: "500g", sku: "COCONUT-POWDER-500G-005-Tender Coconut", thumbnailImage: "https://rukminim2.flixcart.com/image/480/640/k5e7o280/spice-masala/g/6/e/250-coconut-powder-pouch-kotaliya-powder-original-imafm8wkbhkenjfb.jpeg?q=90", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 3, productName: "Cold Pressed Coconut Oil 500ml-Tender Coconut", description: "Pure cold pressed coconut oil", price: 349.0, discountPrice: 299.0, weight: "500ml", sku: "COCONUT-OIL-500ML-005-Tender Coconut", thumbnailImage:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_l1ceWaulXM7dOvuAipd6IGokf62zRhU05gPdNMd_4QgJOhzvo2Md1iI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 3, productName: "Virgin Coconut Oil 1L-Tender Coconut", description: "Premium virgin coconut oil", price: 699.0, discountPrice: 649.0, weight: "1L", sku: "VIRGIN-COCONUT-OIL-1L-005-Tender Coconut", thumbnailImage: "https://www.klfnirmal.com/cdn/shop/files/Amazon_product_pic_size_9_1024x1024.jpg?v=1747809401", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 3, productName: "Tender Coconut Pack-Tender Coconut", description: "Fresh tender coconuts", price: 499.0, discountPrice: 449.0, weight: "5 pieces", sku: "TENDER-COCONUT-5PCS-005-Tender Coconut", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAFQj7v4WZJs0mzgno1Qa8m3ZG5fFwTvs1Ii5TzlqpQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 3, productName: "Dry Coconut-Tender Coconut", description: "Mature dry coconut", price: 120.0, discountPrice: 99.0, weight: "1 piece", sku: "DRY-COCONUT-001-005-Tender Coconut", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtzsSSmY01LKRMUjFaDASEC3C3u225xGdVvJgHFob_Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
         
         
          { categoryId: 5, productName: "Coconut Sugar 500g-Coconut Oil", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 5, productName: "Coconut Milk 400ml-Coconut Oil", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 5, productName: "Coconut Cream 250ml-Coconut Oil", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 5, productName: "Desiccated Coconut 250g-Coconut Oil", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 5, productName: "Coconut Chips 200g-Coconut Oil", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          

             { categoryId: 6, productName: "Coconut Powder 500g-Tender Coconut-Coconut Powder", description: "Natural coconut powder", price: 500.0, discountPrice: 450.0, weight: "500g", sku: "COCONUT-POWDER-500G-005-Tender Coconut-Coconut Powder", thumbnailImage: "https://rukminim2.flixcart.com/image/480/640/k5e7o280/spice-masala/g/6/e/250-coconut-powder-pouch-kotaliya-powder-original-imafm8wkbhkenjfb.jpeg?q=90", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 6, productName: "Cold Pressed Coconut Oil 500ml-Tender-Coconut Powder Coconut", description: "Pure cold pressed coconut oil", price: 349.0, discountPrice: 299.0, weight: "500ml", sku: "COCONUT-OIL-500ML-005-Tender Coconut-Coconut Powder", thumbnailImage:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_l1ceWaulXM7dOvuAipd6IGokf62zRhU05gPdNMd_4QgJOhzvo2Md1iI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 6, productName: "Virgin Coconut Oil 1L-Tender Coconut-Coconut Powder", description: "Premium virgin coconut oil", price: 699.0, discountPrice: 649.0, weight: "1L", sku: "VIRGIN-COCONUT-OIL-1L-005-Tender Coconut-Coconut Powder", thumbnailImage: "https://www.klfnirmal.com/cdn/shop/files/Amazon_product_pic_size_9_1024x1024.jpg?v=1747809401", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 6, productName: "Tender Coconut Pack-Tender Coconut-Coconut Powder", description: "Fresh tender coconuts", price: 499.0, discountPrice: 449.0, weight: "5 pieces", sku: "TENDER-COCONUT-5PCS-005-Tender Coconut-Coconut Powder", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAFQj7v4WZJs0mzgno1Qa8m3ZG5fFwTvs1Ii5TzlqpQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 6, productName: "Dry Coconut-Tender Coconut-Coconut Powder", description: "Mature dry coconut", price: 120.0, discountPrice: 99.0, weight: "1 piece", sku: "DRY-COCONUT-001-005-Tender Coconut-Coconut Powder", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtzsSSmY01LKRMUjFaDASEC3C3u225xGdVvJgHFob_Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },

          
          { categoryId: 8, productName: "Coconut Sugar 500g-Coconut Oil-Virgin Coconut Oil", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil-Virgin Coconut Oil", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 8, productName: "Coconut Milk 400ml-Coconut Oil-Virgin Coconut Oil", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil-Virgin Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 8, productName: "Coconut Cream 250ml-Coconut Oil-Virgin Coconut Oil", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil-Virgin Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 8, productName: "Desiccated Coconut 250g-Coconut Oil-Virgin Coconut Oil", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil-Virgin Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 8, productName: "Coconut Chips 200g-Coconut Oil-Virgin Coconut Oil", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil-Virgin Coconut Oil", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },

          { categoryId: 9, productName: "Coconut Sugar 500g-Coconut Oil-Coconut Sugar", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Sugar", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 9, productName: "Coconut Milk 400ml-Coconut Oil-Coconut Sugar", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Sugar", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 9, productName: "Coconut Cream 250ml-Coconut Oil-Coconut Sugar", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Sugar", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 9, productName: "Desiccated Coconut 250g-Coconut Oil-Coconut Sugar", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Sugar", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 9, productName: "Coconut Chips 200g-Coconut Oil-Coconut Sugar", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Sugar", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },

          { categoryId: 10, productName: "Coconut Sugar 500g-Coconut Oil-Coconut Flour", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Flour", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 10, productName: "Coconut Milk 400ml-Coconut Oil-Coconut Flour", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Flour", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 10, productName: "Coconut Cream 250ml-Coconut Oil-Coconut Flour", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Flour", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 10, productName: "Desiccated Coconut 250g-Coconut Oil-Coconut Flour", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Flour", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 10, productName: "Coconut Chips 200g-Coconut Oil-Coconut Flour", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Flour", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },

          { categoryId: 11, productName: "Coconut Sugar 500g-Coconut Oil-Desiccated Coconut", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil-Desiccated Coconut", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 11, productName: "Coconut Milk 400ml-Coconut Oil-Desiccated Coconut", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil-Desiccated Coconut", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 11, productName: "Coconut Cream 250ml-Coconut Oil-Desiccated Coconut", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil-Desiccated Coconut", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 11, productName: "Desiccated Coconut 250g-Coconut Oil-Desiccated Coconut", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil-Desiccated Coconut", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 11, productName: "Coconut Chips 200g-Coconut Oil-Desiccated Coconut", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil-Desiccated Coconut", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },

          { categoryId: 12, productName: "Coconut Sugar 500g-Coconut Oil-Coconut Chips", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Chips", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 12, productName: "Coconut Milk 400ml-Coconut Oil-Coconut Chips", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Chips", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 12, productName: "Coconut Cream 250ml-Coconut Oil-Coconut Chips", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Chips", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 12, productName: "Desiccated Coconut 250g-Coconut Oil-Coconut Chips", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Chips", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 12, productName: "Coconut Chips 200g-Coconut Oil-Coconut Chips", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Chips", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },

          { categoryId: 13, productName: "Coconut Sugar 500g-Coconut Oil-Coconut Milk Powder", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Milk Powder", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 13, productName: "Coconut Milk 400ml-Coconut Oil-Coconut Milk Powder", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Milk Powder", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 13, productName: "Coconut Cream 250ml-Coconut Oil-Coconut Milk Powder", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Milk Powder", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 13, productName: "Desiccated Coconut 250g-Coconut Oil-Coconut Milk Powder", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Milk Powder", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 13, productName: "Coconut Chips 200g-Coconut Oil-Coconut Milk Powder", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Milk Powder", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },

          { categoryId: 14, productName: "Coconut Sugar 500g-Coconut Oil-Coconut Shell Products", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Shell Products", thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 14, productName: "Coconut Milk 400ml-Coconut Oil-Coconut Shell Products", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Shell Products", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 14, productName: "Coconut Cream 250ml-Coconut Oil-Coconut Shell Products", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Shell Products", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 14, productName: "Desiccated Coconut 250g-Coconut Oil-Coconut Shell Products", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Shell Products", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 14, productName: "Coconut Chips 200g-Coconut Oil-Coconut Shell Products", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Shell Products", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10", status: "ACTIVE", createdAt: now, updatedAt: now },
         /*
         product id:-11
         dry cocnut: https://specialtyproduce.com/sppics/10646.png,
         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnDnM6MbuRADKYTRcw6MkcEAuz0PG5NTpowKeZn_uGO0dmS9Qiy4Plcs&s=10,
         https://www.greendna.in/cdn/shop/products/dry_600x.jpg?v=1605945173,


         product id:-10
         Tender coconut:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UagReYhbghA1DhGAY37spB-8vE2rGz5QNzXBVx-AZGwwV95tI--x_EQ&s=10,
         https://akshayakalpa.org/wp-content/uploads/2024/07/Tender-Coconut-Image.png,
         https://thevegetablebazaar.in/wp-content/uploads/2025/01/Tender-Coconut-1-ps-2.png


         product id:-19
         Coconut Shell Bowl:https://www.thengacoco.com/cdn/shop/files/18_67184959-d1d5-4a80-b5a5-765347121604.jpg?v=1743070305,
         https://5.imimg.com/data5/SELLER/Default/2024/4/410831206/OG/JY/WY/157098373/mini-coconut-bowl-set-2-bowl-2-spoon-500x500.jpg,
         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-NYtZKir72M_9s74Vt8evmBMFabd5MS6DkVMYvdE7MAXKCem2WolG0Mx&s=10

         */
        ],
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", {
      sku: [
        "COCONUT-POWDER-500G-005-Tender Coconut",
        "COCONUT-OIL-500ML-005-Tender Coconut",
        "VIRGIN-COCONUT-OIL-1L-005-Tender Coconut",
        "TENDER-COCONUT-5PCS-005-Tender Coconut",
        "DRY-COCONUT-001-005-Tender Coconut",
        "COCONUT-SUGAR-500G-005-Coconut Oil",
        "COCONUT-MILK-400ML-005-Coconut Oil",
        "COCONUT-CREAM-250ML-005-Coconut Oil",
        "DESICCATED-COCONUT-250G-005-Coconut Oil",
        "COCONUT-CHIPS-200G-005-Coconut Oil",
        "COCONUT-POWDER-500G-005-Tender Coconut-Coconut Powder",
        "COCONUT-OIL-500ML-005-Tender Coconut-Coconut Powder",
        "VIRGIN-COCONUT-OIL-1L-005-Tender Coconut-Coconut Powder",
        "TENDER-COCONUT-5PCS-005-Tender Coconut-Coconut Powder",
        "DRY-COCONUT-001-005-Tender Coconut-Coconut Powder",
        "COCONUT-SUGAR-500G-005-Coconut Oil-Virgin Coconut Oil",
        "COCONUT-MILK-400ML-005-Coconut Oil-Virgin Coconut Oil",
        "COCONUT-CREAM-250ML-005-Coconut Oil-Virgin Coconut Oil",
        "DESICCATED-COCONUT-250G-005-Coconut Oil-Virgin Coconut Oil",
        "COCONUT-CHIPS-200G-005-Coconut Oil-Virgin Coconut Oil",
        "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Sugar",
        "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Sugar",
        "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Sugar",
        "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Sugar",
        "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Sugar",
        "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Flour",
        "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Flour",
        "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Flour",
        "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Flour",
        "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Flour",
        "COCONUT-SUGAR-500G-005-Coconut Oil-Desiccated Coconut",
        "COCONUT-MILK-400ML-005-Coconut Oil-Desiccated Coconut",
        "COCONUT-CREAM-250ML-005-Coconut Oil-Desiccated Coconut",
        "DESICCATED-COCONUT-250G-005-Coconut Oil-Desiccated Coconut",
        "COCONUT-CHIPS-200G-005-Coconut Oil-Desiccated Coconut",
        "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Chips",
        "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Chips",
        "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Chips",
        "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Chips",
        "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Chips",
        "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Milk Powder",
        "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Milk Powder",
        "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Milk Powder",
        "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Milk Powder",
        "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Milk Powder",
        "COCONUT-SUGAR-500G-005-Coconut Oil-Coconut Shell Products",
        "COCONUT-MILK-400ML-005-Coconut Oil-Coconut Shell Products",
        "COCONUT-CREAM-250ML-005-Coconut Oil-Coconut Shell Products",
        "DESICCATED-COCONUT-250G-005-Coconut Oil-Coconut Shell Products",
        "COCONUT-CHIPS-200G-005-Coconut Oil-Coconut Shell Products",
      ],
    });
  },
};
