const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();

// conenction to mongodb
mongoose.connect("mongodb+srv://divyansh:divyansh7@cluster0.pqkvbql.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect('mongodb://username:password@host:port/database?options...');


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
app.listen(3000, () => console.log("Server started listening on port: 3000"));