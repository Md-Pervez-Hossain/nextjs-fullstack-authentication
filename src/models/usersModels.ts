import { models, model, Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Provide  Name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide  Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide  Password"],
  },
  isVerified: {
    type: String,
    default: false,
  },
  isAdmin: {
    type: String,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = models.user || model("user", userSchema);
export default User;
