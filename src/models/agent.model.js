import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
  agentID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  locationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
});

const Agent = mongoose.model("Agent", agentSchema);

export default Agent;
