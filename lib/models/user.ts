import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: String,
    wishlist: { type: Array, default: [] },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export default User;
