import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  universityEnrollmentId: { type: String, required: true },
  pgAddress: { type: String, required: true },
});

const User = model("User", userSchema);

export default User;
