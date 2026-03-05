const Product = require("../models/Product");
const Log = require("../models/Log");
const logger = require("../middleware/logger");

exports.createProduct = async (req, res) => {

  const product = await Product.create(req.body);

  await Log.create({
    action: "CREATE",
    productId: product._id,
    performedBy: req.user.id
  });

  logger.info(`Product created: ${product._id}`);

  res.status(201).json(product);

};

exports.getProducts = async (req, res) => {

  const { page = 1, limit = 5, category, minPrice, maxPrice, sort } = req.query;

  const filter = {};

  if (category) filter.category = category;

  if (minPrice || maxPrice) {

    filter.price = {};

    if (minPrice) filter.price.$gte = minPrice;
    if (maxPrice) filter.price.$lte = maxPrice;

  }

  const products = await Product.find(filter)
    .sort(sort === "desc" ? { price: -1 } : { price: 1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.json(products);

};

exports.getProductById = async (req, res) => {

  const product = await Product.findById(req.params.id);

  res.json(product);

};

exports.updateProduct = async (req, res) => {

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  await Log.create({
    action: "UPDATE",
    productId: product._id,
    performedBy: req.user.id
  });

  logger.info(`Product updated: ${product._id}`);

  res.json(product);

};

exports.deleteProduct = async (req, res) => {

  const product = await Product.findByIdAndDelete(req.params.id);

  await Log.create({
    action: "DELETE",
    productId: req.params.id,
    performedBy: req.user.id
  });

  logger.info(`Product deleted: ${req.params.id}`);

  res.json({ message: "Product deleted" });

};