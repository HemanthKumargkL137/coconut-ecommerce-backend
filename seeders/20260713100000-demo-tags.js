"use strict";

module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const now = new Date();

      await queryInterface.bulkInsert(
        "tags",
        [
          {
            tagName: "Organic",
            description: "Made from organically grown coconuts",
            createdAt: now,
          },
          {
            tagName: "Cold Pressed",
            description: "Extracted without high heat to preserve natural quality",
            createdAt: now,
          },
          {
            tagName: "Virgin Coconut Oil",
            description: "Premium coconut oil made from fresh coconut",
            createdAt: now,
          },
          {
            tagName: "Natural Sweetener",
            description: "Coconut-based alternative to refined sugar",
            createdAt: now,
          },
          {
            tagName: "Gluten Free",
            description: "Suitable for gluten-free diets",
            createdAt: now,
          },
          {
            tagName: "Vegan",
            description: "Contains no animal-derived ingredients",
            createdAt: now,
          },
          {
            tagName: "Dairy Free",
            description: "Coconut-based option without dairy ingredients",
            createdAt: now,
          },
          {
            tagName: "Snack",
            description: "Ready-to-eat coconut snack product",
            createdAt: now,
          },
          {
            tagName: "Handcrafted",
            description: "Made or finished using traditional craft methods",
            createdAt: now,
          },
          {
            tagName: "Eco Friendly",
            description: "Made using sustainable coconut-based materials",
            createdAt: now,
          },
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
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete(
        "tags",
        {
          tagName: [
            "Organic",
            "Cold Pressed",
            "Virgin Coconut Oil",
            "Natural Sweetener",
            "Gluten Free",
            "Vegan",
            "Dairy Free",
            "Snack",
            "Handcrafted",
            "Eco Friendly",
          ],
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
