// adding required dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

const app = express();

// initialize middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connecting mongoose
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(require("./routes/api.js"));
app.use(require("./routes/index.js"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log('Server started on port http://localhost:${PORT}'));