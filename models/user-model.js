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
  Contact: Number,
  Orders: {
    type: Array,
    default: [],
  },
  Cart: {
    type: Array,
    default: [],
  },
  Picture: String,
  isAdmin: Boolean,
});

module.exports = mongoose.model("user", userSchema);
