"use strict";

module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert(
        "productImages",
        [
          {
            productId: 11,
            imageUrl: "https://specialtyproduce.com/sppics/10646.png",
            displayOrder: 1,
          },
          {
            productId: 11,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnDnM6MbuRADKYTRcw6MkcEAuz0PG5NTpowKeZn_uGO0dmS9Qiy4Plcs&s=10",
            displayOrder: 2,
          },
          {
            productId: 11,
            imageUrl: "https://www.greendna.in/cdn/shop/products/dry_600x.jpg?v=1605945173",
            displayOrder: 3,
          },
          {
            productId: 10,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UagReYhbghA1DhGAY37spB-8vE2rGz5QNzXBVx-AZGwwV95tI--x_EQ&s=10",
            displayOrder: 1,
          },
          {
            productId: 10,
            imageUrl: "https://akshayakalpa.org/wp-content/uploads/2024/07/Tender-Coconut-Image.png",
            displayOrder: 2,
          },
          {
            productId: 10,
            imageUrl: "https://thevegetablebazaar.in/wp-content/uploads/2025/01/Tender-Coconut-1-ps-2.png",
            displayOrder: 3,
          },
          {
            productId: 19,
            imageUrl: "https://www.thengacoco.com/cdn/shop/files/18_67184959-d1d5-4a80-b5a5-765347121604.jpg?v=1743070305",
            displayOrder: 1,
          },
          {
            productId: 19,
            imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/4/410831206/OG/JY/WY/157098373/mini-coconut-bowl-set-2-bowl-2-spoon-500x500.jpg",
            displayOrder: 2,
          },
          {
            productId: 19,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-NYtZKir72M_9s74Vt8evmBMFabd5MS6DkVMYvdE7MAXKCem2WolG0Mx&s=10",
            displayOrder: 3,
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

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete(
        "productImages",
        {
          [Sequelize.Op.or]: [
            {
              productId: 11,
              imageUrl: [
                "https://specialtyproduce.com/sppics/10646.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnDnM6MbuRADKYTRcw6MkcEAuz0PG5NTpowKeZn_uGO0dmS9Qiy4Plcs&s=10",
                "https://www.greendna.in/cdn/shop/products/dry_600x.jpg?v=1605945173",
              ],
            },
            {
              productId: 10,
              imageUrl: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UagReYhbghA1DhGAY37spB-8vE2rGz5QNzXBVx-AZGwwV95tI--x_EQ&s=10",
                "https://akshayakalpa.org/wp-content/uploads/2024/07/Tender-Coconut-Image.png",
                "https://thevegetablebazaar.in/wp-content/uploads/2025/01/Tender-Coconut-1-ps-2.png",
              ],
            },
            {
              productId: 19,
              imageUrl: [
                "https://www.thengacoco.com/cdn/shop/files/18_67184959-d1d5-4a80-b5a5-765347121604.jpg?v=1743070305",
                "https://5.imimg.com/data5/SELLER/Default/2024/4/410831206/OG/JY/WY/157098373/mini-coconut-bowl-set-2-bowl-2-spoon-500x500.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-NYtZKir72M_9s74Vt8evmBMFabd5MS6DkVMYvdE7MAXKCem2WolG0Mx&s=10",
              ],
            },
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
