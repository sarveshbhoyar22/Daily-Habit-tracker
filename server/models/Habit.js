const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  dates: [{ type: String }], // Dates habit is marked complete (e.g., "2025-05-18")
});

module.exports = mongoose.model("Habit", habitSchema);
