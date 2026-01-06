mongoose = require("mongoose");

const customerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CustomerProfile", customerProfileSchema);
