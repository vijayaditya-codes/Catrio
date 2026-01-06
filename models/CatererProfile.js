const mongoose = require("mongoose");

const catererProfileSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    services: [String],

    licenseNumber: String,

    isApproved: {
      type: Boolean,
      default: false,
    },

    labours: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "labour",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("caterer", catererProfileSchema);
