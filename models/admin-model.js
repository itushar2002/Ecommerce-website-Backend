const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  FullName: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  Email: String,
  Password: String,
  Products: {
    type: Array,
    default: [],
  },
  gstin: String,
});

module.exports = mongoose.model("user", userSchema);
