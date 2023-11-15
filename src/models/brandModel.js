const { Schema, model, models } = require("mongoose");

const brandSchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
  },
  { timestamps: true }
);

const brandModel = models.brands || model("brands", brandSchema);

export default brandModel;
