const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer");
// const postsController = require("../controllers/posts");
const scheduleController = require("../controllers/schedules");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, scheduleController.getSchedule);

router.post("/createSchedule", upload.single("file"), scheduleController.createSchedule);

// router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteSchedule/:id", scheduleController.deleteSchedule);

module.exports = router;