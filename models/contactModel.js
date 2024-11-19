const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add te contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add te Email Address"],
    },
    phone: {
      type: Number,
      required: [true, "Please add te Phone Number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
