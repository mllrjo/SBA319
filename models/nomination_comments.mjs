import mongoose from "mongoose"

const nomination_commentsSchema = new mongoose.Schema({
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
  faced_allegtions_of_misconduct: {
    type: Boolean,
  },
  notes: {
    type: String,
    required: true
  }

});

export default mongoose.model("nominations_comments", nomination_commentsSchema);
