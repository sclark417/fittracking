const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//port
const PORT = process.env.PORT || 8000;

const app = express();
//to use
app.use(logger("dev"));
//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static files
app.use(express.static("public"));
//mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

//listening to routes
// app.use(require("./routes/api.js"));
// app.use(require("./routes/html.js"));
require("./routes/api.js")(app);
require("./routes/html.js")(app);

//listening to port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
