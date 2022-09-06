const mongoose = require("mongoose");
const Start = mongoose.model(
  "Start",
  new mongoose.Schema({
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  })
);

module.exports = Start;
