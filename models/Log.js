const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  action: String,
  productId: String,
  performedBy: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Log", logSchema);