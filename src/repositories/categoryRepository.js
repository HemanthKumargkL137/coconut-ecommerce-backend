// it will interact with db only

const Category = require("../models/category");

exports.createCategory = async (data) => {
  return await Category.create(data);
};

// Category = your database table model
// data = category data from user
// Category.create(data) = insert one row into database

exports.getAllCategories = async () => {
  return await Category.findAll();
};

exports.getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

exports.updateCategory = async (id, data) => {
  return await Category.update(data, {
    where: { id },
  });
};

exports.deleteCategory = async (id) => {
  return await Category.destroy({
    where: { id },
  });
};