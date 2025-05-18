const Habit = require("../models/Habit");

exports.getHabits = async (req, res) => {
  const habits = await Habit.find({ userId: req.user.id });
  res.json(habits);
};

exports.addHabit = async (req, res) => {
  const { name } = req.body;
  const habit = new Habit({ userId: req.user.id, name, dates: [] });
  await habit.save();
  res.status(201).json(habit);
};

exports.deleteHabit = async (req, res) => {
  const { id } = req.params;
  await Habit.deleteOne({ _id: id, userId: req.user.id });
  res.json({ success: true });
};

exports.toggleCompletion = async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;

  const habit = await Habit.findOne({ _id: id, userId: req.user.id });
  if (!habit) return res.status(404).json({ error: "Habit not found" });

  const index = habit.dates.indexOf(date);
  if (index > -1) {
    habit.dates.splice(index, 1);
  } else {
    habit.dates.push(date);
  }

  await habit.save();
  res.json(habit);
};
