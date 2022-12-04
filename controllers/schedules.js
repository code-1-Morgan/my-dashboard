const Schedule = require("../models/Schedule");

module.exports = {
    // getSchedule: async (req, res) => {
    //     try {
    //       const schedules = await Schedule.find().sort({ time: "desc" }).lean();
    //       res.render("profile.ejs", { schedules: schedules });
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    createSchedule: async (req, res) => {
      try {
          await Schedule.create({
              event: req.body.event,
              time: req.body.time,
              date: req.body.date,
          });
          console.log("Schedule has been added!");
          res.redirect(`/profile`);
      } catch (err) {
          console.log(err);
      }
  }
};