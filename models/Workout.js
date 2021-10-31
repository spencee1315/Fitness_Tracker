// import mongoose
const mongoose = require("mongoose");
// create variable for workout model
const Schema = mongoose.Schema;

// Workout Schema
const FitnessTrackerSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter the Exercise Type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the Exercise Name"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }
    ],
    totalWorkoutTime: {
        type: Number,
        default: 0,
    }
});

// save schema to variable and access with mongoose
const Workout = mongoose.model("Workout", FitnessTrackerSchema);

module.exports = Workout;