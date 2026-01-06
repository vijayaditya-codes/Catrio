const mongoose = require("mongoose");

const labourProfileSchema = new mongoose.Schema(
  {
    skill: String,

    experience: {
      type: Number,
      default: 0,
    },

    availability: {
      type: Boolean,
      default: true,
    },

    catererId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "caterer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("labour", labourProfileSchema);
