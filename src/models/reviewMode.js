const { Schema, model, models } = require("mongoose");

const reviewSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "users", required: true },
    product: { type: Schema.ObjectId, ref: "products", required: true },
    noOfStar: { type: Number, required: true, min: 0, max: 5 },
    comment: { type: String, required: true },
    images: { type: Array },
  },
  { timestamps: true }
);

const reviewModel = models.reviews || model("reviews", reviewSchema);

export default reviewModel;
