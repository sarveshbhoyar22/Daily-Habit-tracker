const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const habitController = require("../controllers/habitController");

router.use(authMiddleware); // protect all routes below

router.get("/", habitController.getHabits);
router.post("/", habitController.addHabit);
router.delete("/:id", habitController.deleteHabit);
router.patch("/:id/toggle", habitController.toggleCompletion);

module.exports = router;
