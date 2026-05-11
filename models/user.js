import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name:{type: String, required: true},
  email:{type: String, required: true, unique: true},
  offeredSkills: [{type: mongoose.Schema.Types.ObjectId, ref: "Skill"}],
  requestedSkills:[{type:mongoose.Schema.Types.ObjectId, ref: "Skill"}]
},
{timestamps: true});

export default mongoose.model("User", userSchema);
