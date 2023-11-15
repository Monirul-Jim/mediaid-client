const { Schema, model, models } = require("mongoose");

const sliderSchema = new Schema(
  {
    addedBy: { type: Schema.ObjectId, ref: "admins", required: true },
    image: { type: String, required: true },
    active: { type: Schema.Boolean, default: true },
  },
  { timestamps: true }
);

const sliderModel = models.sliders || model("sliders", sliderSchema);

export default sliderModel;
