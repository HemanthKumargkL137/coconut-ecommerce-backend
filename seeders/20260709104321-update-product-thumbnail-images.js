"use strict";

module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const now = new Date();

      const products = [
        {
          sku: "COCONUT-POWDER-500G-005",
          thumbnailImage: "https://rukminim2.flixcart.com/image/480/640/k5e7o280/spice-masala/g/6/e/250-coconut-powder-pouch-kotaliya-powder-original-imafm8wkbhkenjfb.jpeg?q=90",
        },
        {
          sku: "COCONUT-OIL-500ML-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_l1ceWaulXM7dOvuAipd6IGokf62zRhU05gPdNMd_4QgJOhzvo2Md1iI&s=10",
        },
        {
          sku: "VIRGIN-COCONUT-OIL-1L-005",
          thumbnailImage: "https://www.klfnirmal.com/cdn/shop/files/Amazon_product_pic_size_9_1024x1024.jpg?v=1747809401",
        },
        {
          sku: "TENDER-COCONUT-5PCS-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAFQj7v4WZJs0mzgno1Qa8m3ZG5fFwTvs1Ii5TzlqpQ&s=10",
        },
        {
          sku: "DRY-COCONUT-001-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtzsSSmY01LKRMUjFaDASEC3C3u225xGdVvJgHFob_Q&s=10",
        },
        {
          sku: "COCONUT-SUGAR-500G-005",
          thumbnailImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfXMLOvLLdwBUhlR8mlChrT2mY7W0NRfqLR0kStunVLWI_f9p-uujgeMIwVYdOPnUpDwBzM5lsDV3oZI7YWkXcIASZLfsFXN0gq4jcpniTgfHLM6h1Y1IEY9_VY-6JKgyLFPbPg&usqp=CAc",
        },
        {
          sku: "COCONUT-MILK-400ML-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Vg-_vR3L4m9lBjzYRotOWfK4ZCnXvO-7UjUFBRC1Q&s=10",
        },
        {
          sku: "COCONUT-CREAM-250ML-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-mcpjZX9_bXI7EU00IzOLzRcUL6Bcb7yc3-z0g0pXQ&s=10",
        },
        {
          sku: "DESICCATED-COCONUT-250G-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0N2Aqy397MvJhmcWKi0JiEpaODeC0QvhRbTZ1Jkp2jcmI4C6XczEnOI&s=10",
        },
        {
          sku: "COCONUT-CHIPS-200G-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVj_82rQhgrYe3BSDxfM_VlmiecRb9A9HGl_5ISNUh2WSPgCqVCs61Eu&s=10",
        },
        {
          sku: "COCONUT-FLOUR-1KG-005",
          thumbnailImage: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now06917/l/7.jpg",
        },
        {
          sku: "COCONUT-WATER-1L-005",
          thumbnailImage: "https://cdn.zeptonow.com/production/ik-seo/tr:w-312,ar-1600-1600,pr-true,f-auto,q-40/cms/product_variant/be665592-a380-43d6-bf8b-7917eaa78342/Pluckk-Natural-Tender-Coconut-Water-Hydration-With-Potassium-Electrolytes-No-Preservatives.jpeg",
        },
        {
          sku: "COCONUT-SHELL-BOWL-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowGEVVrSsoqiBszCLNp19VSNBSUqmubB6webJ7R-lBwTpIY-of8d3sJnL&s=10",
        },
        {
          sku: "COCONUT-COIR-ROPE-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vtUMi-opoZsGKNJumGGkzWuAe_68vVqhllutCBWCp7fMe2oVGV5poomc&s=10",
        },
        {
          sku: "COCONUT-SOAP-100G-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoue_coj9x2JoZi_-pNm-db05mAtPCRIi8uZE1jV9DOgFurCTsMEkq6s1&s=10",
        },
        {
          sku: "COCONUT-HAIR-OIL-200ML-005",
          thumbnailImage: "https://images.meesho.com/images/products/768786750/zxmxm_512.webp?width=512",
        },
        {
          sku: "COCONUT-BODY-OIL-250ML-005",
          thumbnailImage: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/20640444/2024/10/17/8f1fd2e3-e277-4c70-bce2-372c4a063bd81729188475584-Palmers-Coconut-Hydrate-Replenish-Body-Oil-with-Vitamin-E-15-1.jpg",
        },
        {
          sku: "COCONUT-BUTTER-300G-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvCE5xPptU_rL7ZSeVFiFYKiNrtVlChB814_gLYyPk6sI3Ggr7T_lUjSg&s=10",
        },
        {
          sku: "ROASTED-COCONUT-FLAKES-250G-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshMqrP1zTnKZtD2d7feQr0rsVvOuldV9Pusv_WvVJxswCp_BI8P4iz-I&s=10",
        },
        {
          sku: "COCONUT-JAGGERY-500G-005",
          thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sUrrCxz2baB-fZombKh5Xn8L1slDr2SRbLiVcmJ48w&s=10",
        },
      ];

      for (const product of products) {
        await queryInterface.bulkUpdate(
          "products",
          {
            thumbnailImage: product.thumbnailImage,
            updatedAt: now,
          },
          {
            sku: product.sku,
          },
          {
            transaction,
          }
        );
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const products = [
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
      ];

      await queryInterface.bulkUpdate(
        "products",
        {
          thumbnailImage: null,
          updatedAt: new Date(),
        },
        {
          sku: products,
        },
        {
          transaction,
        }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
