import mongoose from "mongoose"

const nomination_statusSchema = new mongoose.Schema({
  nominee: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  }
});

export default mongoose.model("nomination_status", nomination_statusSchema);
