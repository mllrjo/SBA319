import mongoose from "mongoose"

const nomination_commentSchema = new mongoose.Schema({
  nominee: {
    type: String,
    required: true,
  },
  personal_relationship_to_trump: {
    type: String,
    required: true,
  },
  is_billionaire: {
    type: Boolean,
    required: true,
  },
  estimated_net_worth_in_USD: {
    type: String,
    required: true,
  },
  allegations_of_misconduct: {
    type: Boolean,
    required: true,
  },
  notes: {
    type: String,
    required: true
  }

});

export default mongoose.model("nomination_comments", nomination_commentSchema);
