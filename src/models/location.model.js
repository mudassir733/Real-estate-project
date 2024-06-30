import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  locationID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

const Location = mongoose.model("Location", locationSchema);
export default Location;
