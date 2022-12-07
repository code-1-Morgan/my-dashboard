const Schedule = require("../models/Schedule");

module.exports = {
    // getProfileSchedules: async (req, res) => {
    //   try {
    //     const schedules = await Post.find({ user: req.user.id });
    //     res.render("profile.ejs", { schedules: schedules, user: req.user });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    getSchedule: async (req, res) => {
        try {
          const schedules = await Schedule.find().sort({ time: "desc"}).lean();
          res.render("profile.ejs", { schedules: schedules, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
    createSchedule: async (req, res) => {
      try {
          await Schedule.create({
              event: req.body.event,
              time: req.body.time,
              date: new Date(),
              user: req.user.id
          });
          console.log("Schedule has been added!");
          res.redirect(`/profile`);
      } catch (err) {
          console.log(err);
      }
  },
  deleteSchedule: async (req, res) => {
    try {
      // Find schedule by id
      let schedule = await Schedule.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(schedule.cloudinaryId);
      // Delete schedule from db
      await Schedule.remove({ _id: req.params.id });
      console.log("Deleted Schedule");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};