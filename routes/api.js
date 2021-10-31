// importing workout model, dependencies
const db = require("../models");
const router = require("express").Router();

// GET - all workouts from db
// route /api/workouts
router.get("/api/workouts", (req, res) => {
   
    db.Workout.find({}).then(dbWorkout => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });

        res.json(dbWorkout);
    }) .catch(err => {
        console.error(err.message);
        res.status(500).send('Server Error');
    });
});

// POST - create new workout
// route /api/workouts
router.post("/api/workouts", ({ body }, res ) => {

    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        console.error(err.message);
        res.status(500).send('Server Error');
    });
});

// PUT - updated workout
// route /api/workouts/:id
router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.error(err.message);
            res.status(500).send('Server Error');
        });
});

// GET - workouts by range
// route /api/workouts/range
router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        console.error(err.message);
        res.status(500).send('Server Error');
    });
});

module.exports = router;