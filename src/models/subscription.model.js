import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscription: {
      type: Schema.Types.ObjectId, // one who is subscribing
      ref: "User",
    },

    owner: {
      type: Schema.Types.ObjectId, // one for whom subscriber is subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
