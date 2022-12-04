const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer");
// const postsController = require("../controllers/posts");
const scheduleController = require("../controllers/schedules");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, scheduleController.getSchedule);

router.post("/createSchedule", scheduleController.createSchedule);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;