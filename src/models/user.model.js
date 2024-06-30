import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  locationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});

const User = mongoose.model("User", userSchema);
export default User;
