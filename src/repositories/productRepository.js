const Product = require("../models/product");
const Category = require("../models/category");
const { Op } = require("sequelize");
const ProductImage = require("../models/productImage");
const Tag = require("../models/tag");

exports.createProduct = async (data) => {
  return await Product.create(data);
};

// exports.getAllProducts = async () =>{
//     return await Product.findAll();
// }

exports.getAllProducts = async (filters = {}) => {
  const where = {};
  const order = [];

  if (filters.categoryId) {
    where.categoryId = filters.categoryId;
  }

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.search) {
    where.productName = {
      [Op.like]: `%${filters.search}%`,
    };
  }

  if (filters.sortBy === "price" && filters.order) {
    order.push(["price", filters.order]);
  }

  

  return await Product.findAll({
  where,
  order,
  attributes: [
    "id",
    "categoryId",
    "productName",
    "price",
    "thumbnailImage",
    "status",
    "createdAt",
    "updatedAt",
  ],
});
};

// exports.getProductById = async (id) => {
//   return await Product.findByPk(id);
// };

exports.getProductById = async (id) => {
  console.log("REPOSITORY PRODUCT ID:", id);

  const product = await Product.findByPk(id, {
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name", "slug"],
      },
      {
        model: ProductImage,
        as: "productImages",
        attributes: ["id", "imageUrl", "displayOrder"],
      },
      {
        model: Tag,
        as: "tags",
        attributes: ["id", "tagName", "description"],
        through: {
          attributes: [],
        },
      },
    ],
    order: [[{ model: ProductImage, as: "productImages" }, "displayOrder", "ASC"]],
  });

  if (!product) {
    return null;
  }

  const productJson = product.toJSON();

  // productJson.productTagNames = productJson.tags.map((tag) => tag.tagName);

  return productJson;
};

exports.updateProduct = async (id, data) => {
  return await Product.update(data, {
    where: { id },
  });
};

exports.deleteProduct = async (id) => {
  return await Product.destroy({
    where: { id },
  });
};
