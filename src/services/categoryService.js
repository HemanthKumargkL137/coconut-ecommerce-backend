// it will do data formating

const categoryRepository = require("../repositories/categoryRepository");

exports.createCategory = async (data) => {
  return await categoryRepository.createCategory(data);
};

// Service receives data.
// Service sends data to repository.
// Repository saves it.

exports.getAllCategories = async () => {
  return await categoryRepository.getAllCategories();
};


exports.getCategoryById = async (id) =>{
    const category = await categoryRepository.getCategoryById(id);

    if(!category){
        throw new Error("Category not found");
    }

    return category;
}

exports.updateCategory = async (id, data) => {
  const category = await categoryRepository.getCategoryById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  await categoryRepository.updateCategory(id, data);

  return await categoryRepository.getCategoryById(id);
};


exports.deleteCategory = async (id) => {
  const category = await categoryRepository.getCategoryById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  await categoryRepository.deleteCategory(id);

  return category;
};