const { Schema, model, mongoose, models } = require("mongoose");

const wishlistSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "users", required: true },
    product: { type: Schema.ObjectId, ref: "products", required: true },
  },
  { timestamps: true }
);

const wishlistModel = models.wishlists || model("wishlists", wishlistSchema);

export default wishlistModel;
