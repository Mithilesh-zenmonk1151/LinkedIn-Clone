const mongoose = require("mongoose");
const experienceSchema = new mongoose.Schema(
  {
    experienceId: {
      type: String,
      required: true,
    },
    profileHeadline: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    locationType: {
      type: String,
      required: true,
    },
    employementLocation: {
      type: String,
      required: true,
    },
    isCurrentRole: {},
  },
  { timestamps: true }
);
module.exports = mongoose.model("experience", experienceSchema);
