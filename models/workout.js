const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create new schema for individual exercise
//create new schema for new workout
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercise: {
    type: {
      type: String,
      trim: true,
      required: "Enter exercise type",
    },
    name: {
      type: String,
      trim: true,
      required: "Enter exercise name",
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    duration: {
      type: Number,
      required: "Enter duration in minutes",
    },
    distance: {
      type: Number,
    },
  },
});

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
//export module
module.exports = Workout;
