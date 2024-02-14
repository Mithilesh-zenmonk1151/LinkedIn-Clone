const mongoose = require("mongoose");
const educationalDetailsSchema = new mongoose.Schema(
  {
    educationId: {
      type: String,
    },
    schoolId: {
      type: String,
    },
    degree: {
      type: String,
    },
    fieldOfStudy: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
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
module.exports = mongoose.model("educationalDetails", educationalDetailsSchema);
