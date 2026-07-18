const productRepository = require("../repositories/productRepository");
const Category = require("../models/category");

exports.createProduct = async (data) => {

    if (!data.categoryId) {
    throw new Error("Category is required");
  }

  const category = await Category.findByPk(data.categoryId);

  if (!category) {
    throw new Error("Category not found");
  }
  if (!data.categoryId) {
    throw new Error("Category is required");
  }

  if (!data.productName) {
    throw new Error("Product name is required");
  }

  if (!data.price) {
    throw new Error("Price is required");
  }

  if (Number(data.price) <= 0) {
    throw new Error("Price must be greater than 0");
  }

  if (data.discountPrice && Number(data.discountPrice) >= Number(data.price)) {
    throw new Error("Discount price must be less than price");
  }

  if (!data.sku) {
    throw new Error("SKU is required");
  }

  if (data.status && !["ACTIVE", "INACTIVE"].includes(data.status)) {
    throw new Error("Invalid status");
  }

  return await productRepository.createProduct(data);
};


// here service  is saying repository please getAllProducts
// exports.getAllProducts = async () =>{
//     return await productRepository.getAllProducts();
// }

exports.getAllProducts = async (filters) => {
  return await productRepository.getAllProducts(filters);
};

exports.getProductById = async (id) => {
    // console.log("PRODUCT ID:", product);
    const product = await productRepository.getProductById(id);

    if(!product){
        throw new Error("Product not found");
    }

    return product;
};

exports.updateProduct = async (id, data) => {
  const product = await productRepository.getProductById(id);

  

  if (!product) {
    throw new Error("Product not found");
  }

  if (data.productName !== undefined && data.productName.trim() === "") {
    throw new Error("Product name cannot be empty");
  }

  if (data.price !== undefined && Number(data.price) <= 0) {
    throw new Error("Price must be greater than 0");
  }

  if (
    data.discountPrice !== undefined &&
    Number(data.discountPrice) >= Number(data.price || product.price)
  ) {
    throw new Error("Discount price must be less than price");
  }

  if (data.sku !== undefined && data.sku.trim() === "") {
    throw new Error("SKU cannot be empty");
  }

  if (data.status && !["ACTIVE", "INACTIVE"].includes(data.status)) {
    throw new Error("Invalid status");
  }

  if (data.categoryId !== undefined) {
  const category = await Category.findByPk(data.categoryId);

  if (!category) {
    throw new Error("Category not found");
  }
}

  await productRepository.updateProduct(id, data);

  return await productRepository.getProductById(id);
};

exports.deleteProduct = async (id) => {
  const product = await productRepository.getProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  await productRepository.deleteProduct(id);

  return product;
};