import mongoose from "mongoose";

const swapSchema = new mongoose.Schema({
  requester:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },

  responder:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  OfferedSkill:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "skill",
    required: true
  },

  requestedSkill:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skill",
    required: true

  },

  status:{
    type: String,
    Label: ["pending", "accepted", "rejected"],
    default: "pending"
  }

}, {timestamps:true});
export default mongoose.model("Swap", swapSchema);
