const { Schema, model, models } = require("mongoose");

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    createdBy: { type: Schema.ObjectId, ref: "admins", required: true },
  },
  { timestamps: true }
);

const categoriesModel =
  models.categories || model("categories", categorySchema);

export default categoriesModel;
