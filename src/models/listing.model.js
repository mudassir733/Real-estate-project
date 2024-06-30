import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  listingID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  propertyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  agentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent",
    required: true,
  },
  status: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
