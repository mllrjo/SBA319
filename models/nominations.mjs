import mongoose from "mongoose"

const nominationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  nominee: {
    type: String,
    required: true,
  }
});

const Nomination = mongoose.models.Nomination || mongoose.model("Nomination", nominationSchema);
export default Nomination;
