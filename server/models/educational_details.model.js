const mongoose = require("mongoose");
const educational_details_schema = new mongoose.Schema(
  {
    education_id: {
      type: String,
    },
    school_id: {
      type: String,
    },
    degree: {
      type: String,
    },
    field_of_study: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    grade: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "educational_details",
  educational_details_schema
);
