# Workout Tracker

## Description

For week 18 of the UW Coding Bootcamp my homework invited me to create a workout tracker. I was provided with the front end code and was required to create a Mongo database with a Mongoose schema and handle routes with Express.

This application is a fitness tracker that allows a user to create and track daily workouts. A user can log multiple exercises in a workout on a given day. The app has the ability to track the name, type, weight, sets, reps, and duration of an exercise, and there is an option for distance traveled should the exercise be cardio.

## Built With

(https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
(https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
(https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
(https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
(https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


## Link to Site GitHub Repo

* [Deployed Site via Heroku](https://hw11-notetaker-uwbootcamp.herokuapp.com/notes)
* [Github Repo](https://github.com/spencee1315/Fitness_Tracker)

* Demo of working app via [Screencastify](https://drive.google.com/file/d/16lcG863_pduJfFHh_dnkUF3iTYux-496/view)
<img src="public/assets/NoteTaker.png">

## Installation 

1. Clone or download repo via Github
2. Run npm install
3. Enter node server.js

## Usage 
### Screenshots

* Homepage - displays last workout

* Logging a new workout

* Weekly Summary

## Tests

Not applicable.

## Snippet
Route for finding all workouts

```
// GET - all workouts from db
// route /api/workouts
router.get("/api/workouts", (req, res) => {
   
    db.Workout.find({}).then(dbWorkout => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.workoutTime;
            });
            workout.totalWorkoutTime = total;
        });

        res.json(dbWorkout);
    }) .catch(err => {
        console.error(err.message);
        res.status(500).send('Server Error');
    });
});
```

## License 
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Contributing 
Contributors should read the installation section. 

### Authors

* **Elliott Spencer**

### Contact Information

* [Link to Portfolio Site](https://spencee1315.github.io/hw_wk2/)

* [Link to Github](https://github.com/spencee1315)

* [Link to LinkedIn](https://www.linkedin.com/in/elliott-spencer-886a9818/)
