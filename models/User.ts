import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    attempted: Number,
    correct: Number,
    incorrect: Number,
    
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
