const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adoptedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    adoptedMessage: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dog", dogSchema);
