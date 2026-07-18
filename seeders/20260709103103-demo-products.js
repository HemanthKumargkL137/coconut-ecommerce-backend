"use strict";

module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const now = new Date();

      await queryInterface.bulkInsert(
        "products",
        [
          { categoryId: 7, productName: "Coconut Powder 500g", description: "Natural coconut powder", price: 500.0, discountPrice: 450.0, weight: "500g", sku: "COCONUT-POWDER-500G-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,powder&sig=1", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Cold Pressed Coconut Oil 500ml", description: "Pure cold pressed coconut oil", price: 349.0, discountPrice: 299.0, weight: "500ml", sku: "COCONUT-OIL-500ML-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,oil&sig=2", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Virgin Coconut Oil 1L", description: "Premium virgin coconut oil", price: 699.0, discountPrice: 649.0, weight: "1L", sku: "VIRGIN-COCONUT-OIL-1L-005", thumbnailImage: "https://source.unsplash.com/900x700/?virgin,coconut,oil&sig=3", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Tender Coconut Pack", description: "Fresh tender coconuts", price: 499.0, discountPrice: 449.0, weight: "5 pieces", sku: "TENDER-COCONUT-5PCS-005", thumbnailImage: "https://source.unsplash.com/900x700/?tender,coconut&sig=4", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Dry Coconut", description: "Mature dry coconut", price: 120.0, discountPrice: 99.0, weight: "1 piece", sku: "DRY-COCONUT-001-005", thumbnailImage: "https://source.unsplash.com/900x700/?dry,coconut&sig=5", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Sugar 500g", description: "Natural coconut sugar", price: 249.0, discountPrice: 219.0, weight: "500g", sku: "COCONUT-SUGAR-500G-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,sugar&sig=6", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Milk 400ml", description: "Thick coconut milk", price: 180.0, discountPrice: 150.0, weight: "400ml", sku: "COCONUT-MILK-400ML-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,milk&sig=7", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Cream 250ml", description: "Rich coconut cream", price: 220.0, discountPrice: 199.0, weight: "250ml", sku: "COCONUT-CREAM-250ML-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,cream&sig=8", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Desiccated Coconut 250g", description: "Fine desiccated coconut", price: 160.0, discountPrice: 140.0, weight: "250g", sku: "DESICCATED-COCONUT-250G-005", thumbnailImage: "https://source.unsplash.com/900x700/?desiccated,coconut&sig=9", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Chips 200g", description: "Crispy coconut chips", price: 199.0, discountPrice: 179.0, weight: "200g", sku: "COCONUT-CHIPS-200G-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,chips&sig=10", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Flour 1kg", description: "Gluten free coconut flour", price: 399.0, discountPrice: 349.0, weight: "1kg", sku: "COCONUT-FLOUR-1KG-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,flour&sig=11", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Water 1L", description: "Natural coconut water", price: 150.0, discountPrice: 129.0, weight: "1L", sku: "COCONUT-WATER-1L-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,water&sig=12", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Shell Bowl", description: "Eco friendly coconut shell bowl", price: 299.0, discountPrice: 249.0, weight: "1 piece", sku: "COCONUT-SHELL-BOWL-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,shell,bowl&sig=13", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Coir Rope", description: "Natural coconut coir rope", price: 180.0, discountPrice: 159.0, weight: "10m", sku: "COCONUT-COIR-ROPE-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,coir&sig=14", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Soap Bar", description: "Handmade coconut soap", price: 99.0, discountPrice: 79.0, weight: "100g", sku: "COCONUT-SOAP-100G-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,soap&sig=15", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Hair Oil 200ml", description: "Coconut hair care oil", price: 199.0, discountPrice: 169.0, weight: "200ml", sku: "COCONUT-HAIR-OIL-200ML-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,hair,oil&sig=16", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Body Oil 250ml", description: "Moisturizing coconut body oil", price: 299.0, discountPrice: 259.0, weight: "250ml", sku: "COCONUT-BODY-OIL-250ML-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,body,oil&sig=17", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Butter 300g", description: "Creamy coconut butter", price: 350.0, discountPrice: 310.0, weight: "300g", sku: "COCONUT-BUTTER-300G-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,butter&sig=18", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Roasted Coconut Flakes 250g", description: "Roasted coconut flakes", price: 210.0, discountPrice: 189.0, weight: "250g", sku: "ROASTED-COCONUT-FLAKES-250G-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,flakes&sig=19", status: "ACTIVE", createdAt: now, updatedAt: now },
          { categoryId: 7, productName: "Coconut Jaggery 500g", description: "Traditional coconut jaggery", price: 275.0, discountPrice: 240.0, weight: "500g", sku: "COCONUT-JAGGERY-500G-005", thumbnailImage: "https://source.unsplash.com/900x700/?coconut,jaggery&sig=20", status: "INACTIVE", createdAt: now, updatedAt: now },
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
        "COCONUT-POWDER-500G-005",
        "COCONUT-OIL-500ML-005",
        "VIRGIN-COCONUT-OIL-1L-005",
        "TENDER-COCONUT-5PCS-005",
        "DRY-COCONUT-001-005",
        "COCONUT-SUGAR-500G-005",
        "COCONUT-MILK-400ML-005",
        "COCONUT-CREAM-250ML-005",
        "DESICCATED-COCONUT-250G-005",
        "COCONUT-CHIPS-200G-005",
        "COCONUT-FLOUR-1KG-005",
        "COCONUT-WATER-1L-005",
        "COCONUT-SHELL-BOWL-005",
        "COCONUT-COIR-ROPE-005",
        "COCONUT-SOAP-100G-005",
        "COCONUT-HAIR-OIL-200ML-005",
        "COCONUT-BODY-OIL-250ML-005",
        "COCONUT-BUTTER-300G-005",
        "ROASTED-COCONUT-FLAKES-250G-005",
        "COCONUT-JAGGERY-500G-005",
      ],
    });
  },
};