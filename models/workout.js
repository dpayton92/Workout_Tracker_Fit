const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a workout type."
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a workout name."
      },
      duration: {
        type: Number,
        required: "Enter a workout duration."
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;