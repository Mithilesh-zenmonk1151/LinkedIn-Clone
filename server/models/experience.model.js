const mongoose = require("mongoose");
const experience_schema = new mongoose.Schema(
  {
    experience_id: {
      type: String,
      required: true,
    },
    profile_headline: {
      type: String,
      required: true,
    },
    employment_type: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
    },
    location_type: {
      type: String,
      required: true,
    },
    employement_location: {
      type: String,
      required: true,
    },
    is_current_role: {},
  },
  { timestamps: true }
);
module.exports = mongoose.model("experience", experience_schema);
