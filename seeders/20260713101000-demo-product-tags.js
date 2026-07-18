"use strict";

const productTagNames = {
  10: ["Organic", "Vegan", "Dairy Free", "Snack"],
  11: ["Organic", "Gluten Free", "Vegan", "Snack"],
  19: ["Handcrafted", "Eco Friendly", "Organic", "Vegan"],
};

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const tagNames = [...new Set(Object.values(productTagNames).flat())];

      const tags = await queryInterface.sequelize.query(
        "SELECT id, tagName FROM tags WHERE tagName IN (:tagNames)",
        {
          replacements: { tagNames },
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        }
      );

      const tagIdByName = tags.reduce((tagMap, tag) => {
        tagMap[tag.tagName] = tag.id;
        return tagMap;
      }, {});

      const missingTags = tagNames.filter((tagName) => !tagIdByName[tagName]);

      if (missingTags.length > 0) {
        throw new Error(`Missing tags: ${missingTags.join(", ")}`);
      }

      const productTags = Object.entries(productTagNames).flatMap(
        ([productId, names]) =>
          names.map((tagName) => ({
            productId: Number(productId),
            tagId: tagIdByName[tagName],
          }))
      );

      await queryInterface.bulkInsert("productTags", productTags, {
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const productIds = Object.keys(productTagNames).map(Number);
      const tagNames = [...new Set(Object.values(productTagNames).flat())];

      const tags = await queryInterface.sequelize.query(
        "SELECT id FROM tags WHERE tagName IN (:tagNames)",
        {
          replacements: { tagNames },
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        }
      );

      const tagIds = tags.map((tag) => tag.id);

      if (tagIds.length > 0) {
        await queryInterface.bulkDelete(
          "productTags",
          {
            productId: productIds,
            tagId: tagIds,
          },
          { transaction }
        );
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
