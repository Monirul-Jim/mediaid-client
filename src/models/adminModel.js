const { Schema, model, mongoose, models } = require("mongoose");

const AdminSchema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date },
    phone: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    typeOfAccess: { type: String, enum: ["manager", "admin", "stuff"] },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
  },
  { timestamps: true }
);

const adminModel = models.admins || model("admins", AdminSchema);

export default adminModel;
