const db = require("../models");

module.exports = (app) => {
  //app.get for find
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });
  //app.post to make new workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });
  //app.put find workout range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  //app.post create new workout plan
  app.post("/api/workouts/range", (req, res) => {
    db.Workout.create({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  //app to add exercise to workout
  app.put("/api/workouts/:workout", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: params.workout },
      { $push: { exercises: body } },
      { new: true, useFindAndModify: false }
    )
      .then((Workout) => {
        res.json(Workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
