import mongoose from "mongoose"

const nominationsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  nominee: {
    type: String,
    required: true,
  }
});

export default mongoose.model("nominations", nominationsSchema);
