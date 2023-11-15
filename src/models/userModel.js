const { Schema, model, mongoose, models } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date },
    phone: { type: String, default: "" },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    paymentVerified: { type: Boolean, default: false },
    city: { type: String, required: true },
    typeOfUser: { type: String, enum: ["normal", "vip"], default: "normal" },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
  },
  { timestamps: true }
);

const userModel = models.users || model("users", userSchema);

export default userModel;
