import mongoose from "mongoose";

const propertSchema = new mongoose.Schema(
  {
    propertyID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    locationID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    types: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    dateListed: {
      type: Date,
      default: Date.now,
    },
    agentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertSchema);

export default Property;
