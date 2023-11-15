const { Schema, model, models } = require("mongoose");

const subcategorySchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: Schema.ObjectId, ref: "categories", required: true },
    createdBy: { type: Schema.ObjectId, ref: "admins", required: true },
  },
  { timestamps: true }
);

const subcategoriesModel =
  models.subcategories || model("subcategories", subcategorySchema);

export default subcategoriesModel;
